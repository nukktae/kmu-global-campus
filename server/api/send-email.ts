import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'anu.bn@yahoo.com',
      pass: process.env.EMAIL_PASSWORD // Add this to your .env file
    }
  });

  try {
    await transporter.sendMail({
      from: 'anu.bn@yahoo.com',
      to: 'anu.bn@yahoo.com',
      subject: `Job Opportunity from ${body.company}`,
      text: `
Company: ${body.company}
Contact Name: ${body.name}
Email: ${body.email}
Position Type: ${body.positionType}
Location: ${body.location}

Message:
${body.message}
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}); 