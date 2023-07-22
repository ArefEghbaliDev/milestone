import { getAuth } from "@clerk/nextjs/server";
import { NextRequest,NextResponse } from "next/server";
import { Project,ProjectCreate } from "src/models/project.model";
import { PrismaClient } from '@prisma/client'

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const { userId } = getAuth(request);
    const body: ProjectCreate = await request.json();

    console.log("body",body);

    if (!userId) {
        return NextResponse.json({
            success: false,
            message: "UnAuthorized Access"
        },{ status: 403 })
    }

    const prisma = new PrismaClient()

    const project_key = body.title.replace(/ /g,'').slice(0,3).toUpperCase();

    try {
        const project = await prisma.project.create({
            data: {
                title: body.title,
                project_key: project_key,
                creator_id: userId
            }
        });

        const payload: Project = {
            id: project.id,
            created_at: project.created_at.toString(),
            creator: project.creator_id,
            title: body.title,
            project_key: project_key
        }

        return NextResponse.json({
            success: true,
            data: payload
        })
    }
    catch (err) {
        return NextResponse.json({
            success: false,
            message: "Internal Error"
        },{ status: 400 })
    }
}