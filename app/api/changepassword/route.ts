import { NextResponse } from "next/server";
import { changePassword } from "./changePassword";

export async function POST(req: Request) {
    try {
        const { name, password, newPassword } = await req.json()
        const res = await changePassword(password, newPassword, name)
        return res
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}