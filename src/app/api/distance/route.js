import { NextResponse } from "next/server";
import { loadEnvConfig } from 'next/env';

export async function GET() {
    //return new NextResponse("{distance: process.env.distance}": process.env.distance )
    return new NextResponse( process.env.distance )
 
}
