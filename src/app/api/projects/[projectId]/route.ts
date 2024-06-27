import { dbConnect } from "@/lib/dbConnection";
import { projectsModel } from "@/mongo/models/ProjectsModel";
// import mongoose, { Types } from "mongoose";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type ContextType = {
  params: {
    projectId: string
  }
}

export async function GET(req: NextRequest, { params }: ContextType) {

  // const objectId = mongoose.Schema.ObjectId

  const { projectId } = params
  try {
    await dbConnect()
    const project = await projectsModel.findOne({ _id: projectId })
    return NextResponse.json(project)

  } catch (error: unknown) {

    if (error instanceof Error) {
      return NextResponse.json(error.message)
    }
    return NextResponse.json(error)
  }
}