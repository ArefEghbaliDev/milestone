'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { ComponentProps } from 'react';
import { fetchCurrentProject } from 'src/lib/react-query/queries/project.query';

export default function CurrentProjectProvider({ children }: ComponentProps<'div'>) {
    const { pid } = useParams();

    useQuery(['project'], () => fetchCurrentProject(pid));

    return <>{children}</>;
}
``;
