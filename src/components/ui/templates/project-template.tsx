import { ComponentProps } from 'react';
import Sidebar from '../organisms/sidebar';
import ProjectNavbar from '../molecules/project-navbar';

export default function ProjectTemplate({ children }: ComponentProps<'div'>) {
    return (
        <div className="flex items-start justify-between h-screen">
            <Sidebar />
            <div className="flex flex-col items-stretch justify-start py-5 px-10 h-full flex-1">
                <ProjectNavbar />
                {children}
            </div>
        </div>
    );
}
