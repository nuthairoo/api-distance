import { NextResponse } from "next/server";

export async function GET() {
    return new NextResponse("{distance: process.env.distance}": process.env.distance )
 
}
