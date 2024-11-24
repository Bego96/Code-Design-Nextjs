import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/(home)/components/emails/email-template';
import { sendEmail } from '@/app/lib/sendgrid';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {

  //Sending email logic for Resend

  /*try {
    // Parse JSON data from request
    const dataForm = await request.json();
    console.log(dataForm);
    
    // Destructure the request data
    const { email, subject, message, firstName } = dataForm;
    console.log("EMAIL " + email);

    // Send the email using Resend API
    const { data, error } = await resend.emails.send({
      from: email, // Sender email address
      to: ['begic.ismar96@gmail.com'], // Recipient email address (hardcoded)
      subject: subject, // Subject of the email from form
      react: EmailTemplate({ firstName }), // Dynamic content from form
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    // Email was sent successfully
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    // Ensure response is returned in case of error
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }*/

    //Sending email logic for Sendgrid

    const dataForm = await request.json();
    console.log(dataForm);
    
    // Destructure the request data
    const { email, subject, message, firstName } = dataForm;
    console.log("EMAIL " + email);
    try {
      await sendEmail(email, subject, message);
      return NextResponse.json({message: 'Successfuly sent'});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
