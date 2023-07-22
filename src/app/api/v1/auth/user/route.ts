import { PrismaClient } from '@prisma/client';
import { NextRequest,NextResponse } from 'next/server';
import { UserCreate } from 'src/models/user.model';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const body: UserCreate = await request.json();

    const prisma = new PrismaClient();

    try {
        await prisma.user.create({
            data: {
                id: body.id,
                email: body.email,
                account_type: 'trial',
            },
        });

        return NextResponse.json({
            success: true,
        });
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                message: 'Internal Error',
            },
            { status: 400 },
        );
    }
};
