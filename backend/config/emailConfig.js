import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendResetPasswordEmail = async (email, resetUrl) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'BiteBuddy - Password Reset',
    html: `
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; background: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h1 style="color: #333; text-align: center;">Reset Your Password</h1>
      <p style="font-size: 16px; color: #555;">Hello,</p>
      <p style="font-size: 16px; color: #555;">We received a request to reset your password for your BiteBuddy account. Click the button below to reset it:</p>
      <div style="text-align: center; margin: 20px 0;">
        <a href="${resetUrl}"
           style="display: inline-block; padding: 12px 24px; background-color: #7C3AED; color: white; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold;">
          Reset Password
        </a>
      </div>
      <p style="font-size: 16px; color: #555;">If you didn't request a password reset, you can safely ignore this email. The link will expire in 10 minutes for your security.</p>
      <p style="font-size: 16px; color: #555;">For security reasons, please do not share this email with anyone.</p>
      <p style="font-size: 16px; color: #555;">Best regards,<br><strong>BiteBuddy Security Team</strong></p>
    </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send reset email');
  }
};

export default transporter;