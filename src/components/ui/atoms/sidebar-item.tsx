'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';

type SidebarItemProps = {
    icon: ReactNode;
    text: string;
    linkTo: string;
    isActive: boolean;
};

export default function SidebarItem({ icon, text, linkTo, isActive }: SidebarItemProps) {
    const { pid } = useParams();

    return (
        <div className="flex items-center justify-start mt-2">
            <span
                className={clsx('h-[24px] rounded-tr rounded-br w-1 mr-3', {
                    'bg-powder-500': isActive,
                    'bg-transparent': !isActive,
                })}
            />
            <Link
                href={`/projects/p/${pid}${linkTo}`}
                className={clsx('rounded w-full px-3 py-[6px] hover:bg-dark-100 transition-colors duration-100 flex items-center justify-start', {
                    'opacity-75': !isActive,
                })}
            >
                {icon}
                {text}
            </Link>
        </div>
    );
}
