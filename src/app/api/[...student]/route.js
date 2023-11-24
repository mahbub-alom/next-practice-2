import { NextResponse } from "next/server";

export async function GET(request, response){
    const studentDetails=response.params.student;
    return NextResponse.json({result:studentDetails,success:true},{status:200})
}