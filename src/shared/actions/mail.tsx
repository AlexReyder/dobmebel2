"use server"
import nodemailer from 'nodemailer'

const site = process.env.SITE_DOMAIN
const user = process.env.EMAIL_LOGIN
const pass = process.env.EMAIL_PASS

const transporter = nodemailer.createTransport({
	// host: 'smtp.mail.ru',
	host: 'smtp.beget.com',
	port: 465,
	secure: true,
	auth: {
		user,
		pass,
	},
})

export async function mailPasswordRecovery(email: string, token: string){

	const message = `Для того чтобы восстановить пароль перейдите по следующей ссылке: ${site}/password-recovery/?email=${email}&token=${token}`

	// const emailHtml = await render(<RecoveryEmailFC url={`${site}/password-recovery/?email=${email}&token=${token}`}/>);

	

	const mailOptions = {
			from: user,
			to: email,
			subject: 'Сброс пароля',
			text: message,
			// html: emailHtml,
		}

	try {
		 transporter.sendMail(mailOptions, function (error: any, info: any) {
			if (error) {
				console.log(error)
			}
		}
	)
	
	return {
    success: true, 
    error: null
  }
	} catch(e){
		return {
			success: null, 
			error: e as string
		};
	}		

}



