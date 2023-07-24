'use client';

import { ComponentProps, Children, ReactElement } from 'react';
import { Menu } from '@headlessui/react';
import clsx from 'clsx';

type DropdownProps = ComponentProps<'div'> & {
    snapPosition?: 'left' | 'right';
};

export default function Dropdown({ children, snapPosition = 'right' }: DropdownProps) {
    return (
        <Menu as="div" className="relative">
            {Children.map(children, (child) => {
                if ((child as any).type.name === 'DropdownButton') {
                    return child;
                }

                return null;
            })}
            <Menu.Items
                className={clsx('absolute top-full p-3 mt-2 rounded bg-dark-300 border border-dark-100 min-w-max', {
                    'left-0': snapPosition === 'left',
                    'right-0': snapPosition === 'right',
                })}
            >
                {Children.map(children, (child) => {
                    if ((child as any).type.name === 'DropdownItem') {
                        return child;
                    }

                    return null;
                })}
            </Menu.Items>
        </Menu>
    );
}

Dropdown.Button = DropdownButton;
Dropdown.Item = DropdownItem;

function DropdownButton({ children, className }: ComponentProps<'button'>) {
    return <Menu.Button className={clsx('flex items-center justify-center ', className)}>{children}</Menu.Button>;
}

function DropdownItem({ children, disabled, onClick, className }: ComponentProps<'button'>) {
    return (
        <Menu.Item
            disabled={disabled}
            as="button"
            onClick={onClick}
            className={clsx('flex items-center justify-start w-full px-3 py-2 mt-2 rounded  hover:bg-dark-100', className)}
        >
            {children}
        </Menu.Item>
    );
}
