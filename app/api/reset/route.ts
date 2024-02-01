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
            subject: "Reset your icy indulgence account",
            html: `<p>Please use the following One Time Password(OTP) to reset your icy indulgence account.<h2>${otp}</h2><p>Ignore it if you've not requested !</p> <br />Thankyou! 🍦😻 <br /> <a href="https://icy-indulgence.vercel.app/">Icy Indulgence</a></p>`,
        }
        const res = await transporter.sendMail(mail)
        return Response.json(res)
    } catch (error) {
        return Response.json({ error });
    }
}