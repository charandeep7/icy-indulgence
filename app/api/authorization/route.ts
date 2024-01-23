import { NextResponse } from "next/server";
import { checkEmailExists, checkUsernameExists, createUser } from "./registerValidation";

export async function POST(req: Request) {
    try {
        const { username, email, password } = await req.json();
        const isUsernameExists = await checkUsernameExists(username)
        if (isUsernameExists) {
            return NextResponse.json(
                { message: "username already exists" },
                { status: 409 }
            );
        }
        const isEmailExists = await checkEmailExists(email)
        if (isEmailExists) {
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 409 }
            );
        }
        await createUser(username, email, password)
        return NextResponse.json({ message: "created" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}