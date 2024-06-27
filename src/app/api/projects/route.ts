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
  // return NextResponse.json([
  //   {
  //     _id: '1',
  //     name: 'First',
  //     description: 'First description'
  //   },
  //   {
  //     _id: '2',
  //     name: 'Second',
  //     description: 'First description'
  //   },
  //   {
  //     _id: '3',
  //     name: 'Third',
  //     description: 'Third description'
  //   }
  // ])
}