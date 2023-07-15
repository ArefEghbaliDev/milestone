import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { ComponentProps } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { queryClient } from 'src/lib/react-query';
import { getUser } from 'src/lib/react-query/queries/auth.query';
import ReactHydrate from './react-hydrate';
import { dehydrate } from '@tanstack/react-query';

export default async function AuthProvider({ children }: ComponentProps<'div'>) {
    const supabase = createServerComponentClient({ cookies });
    const session = await supabase.auth.getSession();

    if (!session.data.session) {
        return redirect('/login');
    }

    queryClient.prefetchQuery(['user'], getUser);
    const dehydratedState = dehydrate(queryClient);

    return <ReactHydrate state={dehydratedState}>{children}</ReactHydrate>;
}
