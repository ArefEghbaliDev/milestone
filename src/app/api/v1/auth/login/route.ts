import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest,NextResponse } from "next/server";
import { IUserLogin } from "src/models/user.model";
import { cookies } from "next/headers";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const body: IUserLogin = await request.json();

    const supabase = createRouteHandlerClient({ cookies });

    const { error } = await supabase.auth.signInWithPassword({
        email: body.email,
        password: body.password
    });

    if (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        },{ status: 400 })
    }

    return NextResponse.json({
        success: true
    })
}