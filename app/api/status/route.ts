import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        "status": 'running...',
        "date": new Date().toLocaleDateString(),
        "time": new Date().toLocaleTimeString()
    }, {
        status: 200
    })
}