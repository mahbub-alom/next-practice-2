import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request, response) {
  const userData = user.filter((item) => item.id == response.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "User Not Found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(request, response) {
  let payload = await request.json();
  payload.id=response.params.id;
  if(!payload.name || !payload.email || !payload.age){
    return NextResponse.json({result:"request data is not valid", success:false},{status:400})
  }
  return NextResponse.json({result:payload,success:true},{status:200})
}

export function DELETE(request, response){
  let id = response.params.id;
  if(id){
    return NextResponse.json({result:"user deleted",success:true},{status:200})
  }
  else{
    return NextResponse.json({result:"internal error, Please try after sometime",success:false},{status:400})
  }
}