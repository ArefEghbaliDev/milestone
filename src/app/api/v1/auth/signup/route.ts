import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest,NextResponse } from 'next/server';
import { IUser,IUserSignup } from 'src/models/user.model';

import { cookies } from 'next/headers';

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const body: IUserSignup = await request.json();

    const supabase = createRouteHandlerClient({ cookies });

    const { data,error } = await supabase.auth.signUp({
        email: body.email,
        password: body.password,
        options: {
            data: {
                fullname: body.fullname,
            },
            emailRedirectTo: request.nextUrl.origin + '/api/v1/auth/callback',
        },
    });

    if (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 400 },
        );
    }

    const result: IUser = {
        id: data.user!.id,
        created_at: data.user!.created_at,
        email: body.email,
        fullname: body.fullname,
        account_type: body.account_type,
        avatar: null,
    };

    return NextResponse.json({
        success: true,
        data: result,
    });
};
