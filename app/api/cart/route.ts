import { NextResponse } from "next/server";
import { readCartItems } from "../prisma/readFlavors";

export async function GET(request: Request) {
    try {
        return NextResponse.json({
            message: "working fine..."
        }, {
          status: 200,
        });
      } catch (error) {
        console.error(error);
        
        return NextResponse.json({ error: "Internal Server Error" }, {
          status: 500,
        });
      }
}

export async function PUT(request: Request,response: Response) {
    try {
        const items = await request.json()
        const result = await readCartItems(items);
        return NextResponse.json(result, {
          status: 200,
        });
      } catch (error: any) {
        return NextResponse.json({
            message: error.message
        },{
            status: 500
        })
      }
}