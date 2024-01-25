import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function POST(req: Request) {
    try {
        const { otp, email } = await req.json()
        const mail = {
            from: "Icy Indulgence <kitishkumar2003@gmail.com>",
            to: email,
            subject: "Confirm your icy indulgence account",
            html: `<p>Please use the following One Time Password(OTP) to verify your icy indulgence account.<h2>${otp}</h2><br />Thankyou ! 🍦😻</p>`,
        }
        const res = await transporter.sendMail(mail)
        return Response.json(res)
    } catch (error) {
        return Response.json({ error });
    }
}