import sgMail from '@sendgrid/mail';

export const sendEmail = async (email: string, subject: string, text: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  // Ensure all required fields are provided
  if (!email || !subject || !text) {
    throw new Error('Missing required email parameters');
  }

  const msg = {
    to: 'begic.mustafa@gmail.com',
    from: email, // Use your verified SendGrid email
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to begic.ismar96@gmail.com`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
