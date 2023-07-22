'use client';

import { useQuery } from '@tanstack/react-query';
import { ComponentProps } from 'react';
import { fetchProjects } from 'src/lib/react-query/queries/project.query';

export default function ProjectsProviderClient({ children }: ComponentProps<'div'>) {
    useQuery(['projects'], fetchProjects);

    return <>{children}</>;
}
