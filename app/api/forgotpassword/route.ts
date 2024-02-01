import { NextResponse } from "next/server"
import { checkEmailExists } from "../authorization/registerValidation"
import { resetPassword } from "./forgotPassword"

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const email = searchParams.get('email') as string
        const isEmailExists = await checkEmailExists(email)
        if (!isEmailExists) {
            return NextResponse.json(
                { message: "Email doesn't exists" },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { message: "ok" },
            { status: 200 }
        )
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { email, newPassword } = await req.json()
        const res = await resetPassword(email, newPassword)
        return res
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}