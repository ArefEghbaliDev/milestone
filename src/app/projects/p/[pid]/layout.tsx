import { ComponentProps } from 'react';
import CurrentProjectProvider from 'src/components/current-project-provider';
import ProjectTemplate from 'src/components/ui/templates/project-template';

export default function ProjectLayout({ children }: ComponentProps<'div'>) {
    return (
        <CurrentProjectProvider>
            <ProjectTemplate>{children}</ProjectTemplate>
        </CurrentProjectProvider>
    );
}
