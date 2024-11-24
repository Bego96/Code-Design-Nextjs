import nodemailer from 'nodemailer'
import SMTPConnection from 'nodemailer/lib/smtp-connection'
import SMTPTransport from 'nodemailer/lib/smtp-transport'


const transport = nodemailer.createTransport({
    host: 'mail.code-design.ba',
    port: 25,
    secure: true,
    auth: {
        user: 'ismar.begic@code-design.ba',
        pass: 'bYj88l4V2n'
    }
} as SMTPTransport.Options)

export const sendEmail = async (dto: any) =>{
    const {sender, receipients, subject, message} = dto;

    return await transport.sendMail({
        from: sender,
        to: receipients,
        subject,
        html: message,
        text: message,
    })

}