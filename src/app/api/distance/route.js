import { NextResponse } from "next/server";

function Page() {
  return <h1>The value of customKey is: {process.env.distance}</h1>;
}
 
export default Page;
/*export async function GET() {
    //return new NextResponse("{distance: 100}" )
    return new NextResponse("{distance: ${process.env.distance}}" )
 
}*/
