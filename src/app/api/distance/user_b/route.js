import { NextResponse } from "next/server";

export async function GET() {
    //return new NextResponse("{distance: 2000}" )
    return NextResponse.json({
    distance: 2000, // ✅ POST function return type checks type of response body object
  });
}
