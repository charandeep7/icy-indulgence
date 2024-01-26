import { NextResponse } from "next/server";
import { getUserIdByEmail } from "./getUserId";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')!
    const id = await getUserIdByEmail(email)
    return NextResponse.json(id, {
        status: 200
    })
}