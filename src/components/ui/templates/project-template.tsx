import { ComponentProps } from 'react';
import Sidebar from '../organisms/sidebar';
import ProjectNavbar from '../molecules/project-navbar';

export default function ProjectTemplate({ children }: ComponentProps<'div'>) {
    return (
        <div className="flex items-start justify-between h-screen">
            <Sidebar />
            <div className="grid grid-cols-1 project-template-grid py-5 px-10 h-full flex-1">
                <ProjectNavbar />
                {children}
            </div>
        </div>
    );
}
