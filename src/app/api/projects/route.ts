import { dbConnect } from "@/lib/dbConnection";
import { projectsModel } from "@/mongo/models/ProjectsModel";
import { NextResponse } from "next/server";

// import { projects } from './projects.ts'
export async function GET(req: Request, res: Response) {

  try {
    await dbConnect()
    const projectsList = await projectsModel.find()
    console.log(projectsList, 'RRRRRRR')
    return NextResponse.json(projectsList)

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(error.message)
    }
    return NextResponse.json(error)
  }
  // return new Response('Hello world');
  // return NextResponse.json({ message: "Hello - GET" }, { status: 300 });
}