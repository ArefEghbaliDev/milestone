'use client';

import { useClerk, useUser } from '@clerk/nextjs';
import Avatar from '../atoms/avatar';
import Dropdown from '../molecules/dropdown';

import { FiLogOut, FiUser } from 'react-icons/fi';

export default function UserProfile() {
    const { user } = useUser();
    const { signOut } = useClerk();

    if (!user) {
        return <div>Login</div>;
    }

    const handleSignout = async () => {
        await signOut();
    };

    return (
        <Dropdown>
            <Dropdown.Button>
                <div className="flex items-center justify-center">
                    <p className="text-powder-500 mr-2">{`${user.firstName} ${user.lastName}`}</p>
                    <Avatar avatar={user.imageUrl} displayName={user.firstName!} />
                </div>
            </Dropdown.Button>
            <Dropdown.Item>
                <FiUser size={18} className="mr-2" />
                Account Settings
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSignout}>
                <FiLogOut size={18} className="mr-2" />
                Sign Out
            </Dropdown.Item>
        </Dropdown>
    );
}
