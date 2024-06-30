import { dbConnect } from "@/lib/dbConnection";
import { projectsModel } from "@/mongo/models/ProjectsModel";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {

  try {
    await dbConnect()
    const projectsList = await projectsModel.find()
    return NextResponse.json(projectsList)

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(error.message)
    }
    return NextResponse.json(error)
  }
}