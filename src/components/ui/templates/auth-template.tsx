'use client';

import { ComponentProps } from 'react';

export default function AuthTemplate({ children }: ComponentProps<'div'>) {
    return (
        <div className="h-screen mx-auto py-5 auth-template">
            <div className="flex items-center justify-between col-span-2">
                <h4>ProManage</h4>
            </div>
            {children}
        </div>
    );
}
