'use client';

import { FiBell, FiMessageSquare } from 'react-icons/fi';
import UserProfile from '../organisms/user-profile';
import Button from '../atoms/button';

export default function ProjectNavbar() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <p className="opacity-50">Project Name /</p>
                <p className="font-medium text-lg pl-1">Workspace</p>
            </div>
            <div className="flex items-center">
                <Button type="button" variant="icon" color="default" className="mr-5">
                    <FiMessageSquare size={20} />
                </Button>
                <Button type="button" variant="icon" color="default" className="mr-5">
                    <FiBell size={20} />
                </Button>
                <UserProfile />
            </div>
        </div>
    );
}
