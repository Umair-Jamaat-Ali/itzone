import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');



export const GET = async (req) => {
    return NextResponse.json({ message: "GEt request called" })
}

export const POST = async (req) => {

    try {
        const body = await req.json();

        console.log('body', body)


        const Name = body.firstName;
        const lastName = body.lastName;
        const email = body.email;
        const company = body.company;
        const phone = body.phoneNumber;
        const message = body.message;

        if (!Name && !lastName && !email && !company && !phone && !message) {
            console.log("All field are required");
            return
        }

        if (Name && lastName && email && company && phone && message) {
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
                connectionTimeout: 10000,
                greetingTimeout: 5000, 
                socketTimeout: 45000 
            });

            console.log("transporter", transporter);

            const resetLink = `${process.env.NEXTAUTH_URL}/userDetail/?`;
        console.log("resetLink",resetLink);

            const mailOptions = {
                to: process.env.EMAIL_USER,
                from: email,
                subject: "User Information",
                html: `First Name :  ${Name}, <br/> Last Name : ${lastName}, <br/> Mail :  ${email}, <br/> Company : ${company}, <br/> Phone : ${phone}, <br/> Message : ${message}`
            };

            console.log("mailOptions", mailOptions);

            const sent = await transporter.sendMail(mailOptions);
            console.log("sent", sent);

            if (!sent) {
                throw new Error("Mail not sent. Something went wrong");
            }
        }


        return NextResponse.json({ message: "Mail has been send" })

    } catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: "Mail has been send" })
    }
}