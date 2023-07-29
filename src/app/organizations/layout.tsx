import { ComponentProps } from 'react';
import ProjectsProviderClient from 'src/components/projects-provider-client';

export default async function ProjectsLayout({ children }: ComponentProps<'div'>) {
    return <ProjectsProviderClient>{children}</ProjectsProviderClient>;
}
