import { ComponentProps } from 'react';
import AuthProvider from 'src/components/auth-provider';

export default function ProjectsLayout({ children }: ComponentProps<'div'>) {
    return <AuthProvider>{children}</AuthProvider>;
}
