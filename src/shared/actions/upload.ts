"use server"

import { addProps } from '@/shared/utils/common'
import {
	DeleteObjectCommand,
	PutObjectCommand,
	S3Client
} from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { imageSize } from 'image-size'
import sharp from 'sharp'
import { v4 as uuidv4 } from 'uuid'

const s3Client = new S3Client({
	region: 'ru-central-1',
	endpoint: 'https://s3.ru1.storage.beget.cloud',
	credentials: {
			accessKeyId: '67LTFGMHPR87B0P1WV0U',
			secretAccessKey: 'XJxRYJjciP6XppEN9SsD95uynY4EwPnAlQesCnhu'
	}})
const bucketName = 'd67881e0fd65-pure-elder'	

 export async function handleUploadCasesImages(files: File[], color: string | undefined){

		let result: any = {
			originals: [],
			overviews: [],
			thumbnails: [],
		}

		let output: any = {
		}

		await Promise.all(
			files.map( async (file) => {
				const arrayBuffer = await file.arrayBuffer();
				const buffer = Buffer.from(arrayBuffer)
				const filePrefix = uuidv4()
				await sharp(buffer)
				.jpeg({quality: 90})
				.toBuffer({resolveWithObject: true})
				.then( async (img) => {
					const dimension = imageSize(img.data)
					const filename =  filePrefix + '_original' + '.' + dimension.type
					const presignedUrl = await getSignedUrl(
						s3Client,
							new PutObjectCommand({
									Bucket: bucketName,
									Key: filename,
									ContentType:'image/jpeg'
							}),
							{ expiresIn: 60 },
					);
					await fetch(presignedUrl, {
						method: "PUT",
						body: img.data,
					});

					const data = {
						url: `https://s3.ru1.storage.beget.cloud/${bucketName}/${filename}`,
						name: filename,
						dimension
					}

					const isColor = output.hasOwnProperty(color);
						if(!isColor){
							addProps(output, [color, 'originals'], [data])
						} else {
							output[color!]["originals"].push(data)
						}
					
				})

				await sharp(buffer)
				.jpeg({quality: 75})
				.toBuffer({resolveWithObject: true})
				.then( async (img) => {
					const dimension = imageSize(img.data)
					const filename =  filePrefix + '_overview' + '.' + dimension.type

					const presignedUrl = await getSignedUrl(
						s3Client,
							new PutObjectCommand({
									Bucket: bucketName,
									Key: filename,
									ContentType:'image/jpeg'
							}),
							{ expiresIn: 60 },
					);
					await fetch(presignedUrl, {
						method: "PUT",
						body: img.data,
					});

					const data = {
						url: `https://s3.ru1.storage.beget.cloud/${bucketName}/${filename}`,
						name: filename,
						dimension
					}

					const isColor = output.hasOwnProperty(color);
						if(!isColor){
							addProps(output, [color, 'overviews'], [data])
						} else {
							if(output[color!].hasOwnProperty("overviews")){
								output[color!]["overviews"].push(data)
							} else {
								addProps(output, [color, 'overviews'], [data])
							}
						}
				})

				await sharp(buffer)
				.resize({
					fit: sharp.fit.contain,
					width: 200
				})
				.jpeg({quality: 75})
				.toBuffer({resolveWithObject: true})
				.then( async (img) => {
					const dimension = imageSize(img.data)
					const filename =  filePrefix + '_thumbnail' + '.' + dimension.type

						const presignedUrl = await getSignedUrl(
						s3Client,
							new PutObjectCommand({
									Bucket: bucketName,
									Key: filename,
									ContentType:'image/jpeg'
							}),
							{ expiresIn: 60 },
					);
					await fetch(presignedUrl, {
						method: "PUT",
						body: img.data,
					});

					const data = {
						url: `https://s3.ru1.storage.beget.cloud/${bucketName}/${filename}`,
						name: filename,
						dimension
					}

					const isColor = output.hasOwnProperty(color);
						if(!isColor){
							addProps(output, [color, 'thumbnails'], [data])
						} else {
							if(output[color!].hasOwnProperty("thumbnails")){
								output[color!]["thumbnails"].push(data)
							} else {
								addProps(output, [color, 'thumbnails'], [data])
							}
						}
				})

			})
		)
		return JSON.stringify({
			output
		})
 }

 export async function handleDeleteFile(file: any){
		const aws = await s3Client.send(
			new DeleteObjectCommand({
				Bucket: bucketName,
				Key: file,
			}),
		);
	}

	export async function handleUploadPromo(file: File[]){
		const cfile = file[0]
		const preImage = await cfile.arrayBuffer()
		const imageBuffer = Buffer.from(preImage)
		try{
			const command =
				new PutObjectCommand({
					Bucket: bucketName,
					Key: cfile.name,
				})

			const presignUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 });
			await fetch(presignUrl, {
				method: "PUT",
				body: imageBuffer,
			});
			const output = `https://s3.ru1.storage.beget.cloud/${bucketName}/${cfile.name}`
			
			return{
				success: output,
				error: null
			}
		} catch(e){
			return {
				success: null,
				error: e as string
			}
		}
	}
	
	export async function handleDeletePromo(filename:string){
		try{
			const file = filename.split(`${bucketName}/`)[1]
			const deletedFile = await s3Client.send(
				new DeleteObjectCommand({
					Bucket: bucketName,
					Key: file,
				}),
			);
			return {
				success: true,
				error: null
			}
		} catch(e){
			return {
				success: false,
				error: e as string
			}
		}

	}