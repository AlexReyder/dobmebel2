'use client';

import { Upload } from 'lucide-react'
import * as React from 'react'
import Dropzone, {
  type DropzoneProps,
  type FileRejection
} from 'react-dropzone'
import { toast } from 'react-hot-toast'

import { handleDeleteFile, handleUploadCasesImages } from '@/shared/actions/upload'
import { IImagesData, IUploadedFile } from '@/shared/types/admin/upload'
import { ProductImageMover } from '@/shared/ui/admin/ImageMover/image-mover'
import { cn, formatBytes } from '@/shared/utils/common'
import { useState, useTransition } from 'react'

interface FileUploaderProps extends React.HTMLAttributes<HTMLDivElement> {
  value: IUploadedFile[] | [];
  onValueChange?: React.Dispatch<React.SetStateAction<IUploadedFile[]>>;
  color: string
  progresses?: Record<string, number>;
  accept?: DropzoneProps['accept'];
  maxSize?: DropzoneProps['maxSize'];
  maxFiles?: DropzoneProps['maxFiles'];
  multiple?: boolean;
  disabled?: boolean;
}

export function FileUploader(props: FileUploaderProps) {
  const {
    value: valueProp,
    onValueChange,
    color,
    progresses,
    accept = { 'image/*': [] },
    maxSize = 1024 * 1024 * 2,
    maxFiles = 1,
    multiple = false,
    disabled = false,
    className,
    ...dropzoneProps
  } = props;

  
  const [files, setFiles] = useState<IImagesData | {}>(props.value)
  const [isPending, startTransition] = useTransition();
  const [updateMount, setUpdateMount] = useState(JSON.stringify(files))
  
  const onDrop = async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (!multiple && maxFiles === 1 && acceptedFiles.length > 1) {
        toast.error('Произошла ошибка');
        return;
      }

      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ file }) => {
          toast.error(`Файл ${file.name} не был загружен`);
        });
      }

      const dataServer = await handleUploadCasesImages(acceptedFiles, color)
      const data = JSON.parse(dataServer)
      const prevState = props.value;
      if(prevState.hasOwnProperty(color)){
        for(let prop in data.output[color]){
          if(prevState[color].hasOwnProperty(prop)){
            prevState[color][prop] = prevState[color][prop].concat(data.output[color][prop])
          } else {
            prevState[color][prop] = data.output[color][prop]
          }
        }
      } else {
        prevState[color] = data.output[color]
      }
        startTransition(() => {
        setFiles(prevState)
        setUpdateMount(JSON.stringify(files))
        onValueChange?.(prevState)
      });  
    }

  async function onRemove(file: string, color: string) {
    const filename = file.split('https://s3.ru1.storage.beget.cloud/d3f71020d41d-tractable-seth/')[1]
    if (!files || Object.keys(files).length === 0) return;
    const filesz = [filename];
    const findIndex = files[color].thumbnails.findIndex((el) => el.name === filename )
    filesz.push(files[color].overviews[findIndex].name)
    filesz.push(files[color].originals[findIndex].name)
    await Promise.all( filesz.map(async(file) => {
      await handleDeleteFile(file)
    }))
    const copyPrevState = JSON.parse(JSON.stringify(files));
    copyPrevState[color].thumbnails.splice(findIndex, 1)
    copyPrevState[color].originals.splice(findIndex, 1)
    copyPrevState[color].overviews.splice(findIndex, 1)

    setFiles(copyPrevState);
    onValueChange?.(copyPrevState)
  }


  return (
    <div className='relative flex flex-col gap-6 overflow-hidden'>
      <Dropzone
        onDrop={onDrop}
        accept={accept}
        maxSize={maxSize}
        maxFiles={maxFiles}
        multiple={maxFiles > 1 || multiple}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div
            {...getRootProps()}
            className={cn(
              'group border-muted-foreground/25 hover:bg-muted/25 relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed px-5 py-2.5 text-center transition',
              'ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden',
              isDragActive && 'border-muted-foreground/50',
              className
            )}
            {...dropzoneProps}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className='flex flex-col items-center justify-center gap-4 sm:px-5'>
                <div className='rounded-full border border-dashed p-3'>
                  <Upload
                    className='text-muted-foreground size-7'
                    aria-hidden='true'
                  />
                </div>
                <p className='text-muted-foreground font-medium'>
                  Перетащите файлы
                </p>
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center gap-4 sm:px-5'>
                <div className='rounded-full border border-dashed p-3'>
                  <Upload
                    className='text-muted-foreground size-7'
                    aria-hidden='true'
                  />
                </div>
                <div className='space-y-px'>
                  <p className='text-muted-foreground font-medium'>
                    Перетащите файлы сюда или нажмите чтобы выбрать
                  </p>
                  <p className='text-muted-foreground/70 text-sm'>
                    Вы можете загрузить до
                    {maxFiles > 1
                      ? ` ${maxFiles === Infinity ? 'multiple' : maxFiles}
                     изображений по ${formatBytes(maxSize)} каждый`
                      : ` a file with ${formatBytes(maxSize)}`}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </Dropzone>
       <ProductImageMover data={files} setFiles={setFiles} setImages={onValueChange} removeFile={onRemove} color={color} key={JSON.stringify(files)}/>
    </div>
  );
}
