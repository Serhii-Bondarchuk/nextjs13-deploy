// import { dbConnection } from "@/lib/db";
import { NextResponse } from "next/server";

import { dbConnect } from "@/lib/dbConnection";
import { projectsModel } from "@/mongo/models/ProjectsModel";


export async function GET() {
  const db = await dbConnect()

  if (db instanceof Error) {
    return NextResponse.json({
      msg: db.message
    })
  }

  return new NextResponse('Mongo DB connected')
}