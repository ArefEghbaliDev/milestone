import { getAuth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextRequest,NextResponse } from "next/server";
import { Project } from "src/models/project.model";

export const GET = async (request: NextRequest,{ params }: { params: { oid: string } }): Promise<NextResponse> => {
    const { userId } = getAuth(request);


    if (!userId) {
        return NextResponse.json({
            success: false,
            message: "UnAuthorized Access"
        },{ status: 403 })
    }

    const prisma = new PrismaClient();

    const project = await prisma.project.findFirst({ where: { project_key: params.oid,creator_id: userId } });

    if (!project) {
        return NextResponse.json({
            success: false,
            message: "Project does not exist"
        },{ status: 404 })
    }

    const result: Project = {
        id: project.id,
        title: project.title,
        created_at: project.created_at.toString(),
        creator: project.creator_id,
        project_key: project.project_key
    }

    return NextResponse.json({
        success: true,
        data: result
    })
}