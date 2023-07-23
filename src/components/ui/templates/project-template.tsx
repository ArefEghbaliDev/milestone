import { ComponentProps } from 'react';
import Sidebar from '../organisms/sidebar';

export default function ProjectTemplate({ children }: ComponentProps<'div'>) {
    return (
        <div className="flex items-start justify-between h-screen">
            <Sidebar />
            <div className="flex flex-col items-start justify-start p-5 h-full flex-1">
                <p>Navbar</p>
                {children}
            </div>
        </div>
    );
}
