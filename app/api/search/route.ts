import { NextResponse } from "next/server";
import { searchQueryResult } from "../prisma/searchQueryRead";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    const result = await searchQueryResult(query as string)
    return NextResponse.json(result)
}