'use client';

import Link from 'next/link';
import Dropdown from './dropdown';
import { FiBell, FiChevronDown, FiMessageSquare } from 'react-icons/fi';
import UserProfile from '../organisms/user-profile';
import Button from '../atoms/button';

export default function ProjectNavbar() {
    return (
        <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
                <Link href="/support" className="mr-8">
                    Support
                </Link>
                <Link href="/support" className="mr-8">
                    Tutorials
                </Link>
                <Dropdown snapPosition="right">
                    <Dropdown.Button>
                        Create <FiChevronDown size={16} className="ml-2" />
                    </Dropdown.Button>
                    <Dropdown.Item>Task</Dropdown.Item>
                    <Dropdown.Item>Issue</Dropdown.Item>
                    <Dropdown.Item>Goal</Dropdown.Item>
                    <Dropdown.Item>Bug</Dropdown.Item>
                </Dropdown>
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
