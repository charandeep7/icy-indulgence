import { NextResponse } from "next/server";
import { changePassword } from "./changePassword";

export async function POST(req: Request) {
    try {
        const { id, password, newPassword } = await req.json()
        const res = await changePassword(password, newPassword, id)
        return res
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}