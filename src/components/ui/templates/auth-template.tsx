'use client';

import { ComponentProps } from 'react';
import Navbar from '../molecules/navbar';

export default function AuthTemplate({ children }: ComponentProps<'div'>) {
    return (
        <div className="h-screen mx-auto py-5 auth-template max-w-container">
            <Navbar />
            {children}
        </div>
    );
}
