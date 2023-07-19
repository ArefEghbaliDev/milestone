import clsx from 'clsx';
import { ComponentProps } from 'react';
import { MoonLoader } from 'react-spinners';

type TButtonProps = ComponentProps<'button'> & {
    isLoading?: boolean;
    variant: TButtonVariant;
    color: TButtonColor;
};

type TButtonVariant = 'contained' | 'text' | 'outline' | 'icon';
type TButtonColor = 'default' | 'primary' | 'secondary' | 'warning' | 'danger';

type TVariants = {
    [key in TButtonVariant]: {
        [key in TButtonColor]: string;
    };
};

export default function Button({ type, onClick, disabled, className, isLoading, children, variant, color }: TButtonProps) {
    const variants: TVariants = {
        contained: {
            primary: 'bg-primary-500 text-powder-500 hover:bg-primary-700',
            secondary: 'bg-secondary-500 text-dark-500 hover:bg-secondary-700',
            default: 'bg-gray-200 text-dark-500 hover:bg-gray-400',
            warning: 'bg-amber-500 text-dark-500 hover:bg-amber-700',
            danger: 'bg-rose-500 text-dark-500 hover:bg-rose-700',
        },
        text: {
            primary: 'bg-transparent text-primary-500 hover:bg-primary-500 hover:text-white-500',
            secondary: 'bg-transparent text-secondary-500 hover:bg-secondary-500 hover:text-white-500',
            default: 'bg-transparent text-dark-500 hover:bg-gray-400 hover:text-dark-500',
            warning: 'bg-transparent text-amber-500 hover:bg-amber-500 hover:text-dark-500',
            danger: 'bg-transparent text-rose-500 hover:bg-rose-500 hover:text-dark-500',
        },
        outline: {
            primary: 'bg-transparent border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white-500',
            secondary: 'bg-transparent border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-dark-500',
            default: 'bg-transparent border-gray-400 text-powder-500 hover:bg-gray-400 hover:text-dark-500',
            warning: 'bg-transparent border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-dark-500',
            danger: 'bg-transparent border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-dark-500',
        },
        icon: {
            primary: 'bg-primary-500 text-powder-500 hover:bg-primary-700',
            secondary: 'bg-secondary-500 text-dark-500 hover:bg-secondary-700',
            default: 'bg-gray-200 text-dark-500 hover:bg-gray-400',
            warning: 'bg-amber-500 text-dark-500 hover:bg-amber-700',
            danger: 'bg-rose-500 text-dark-500 hover:bg-rose-700',
        },
    };

    return (
        <button
            type={type}
            disabled={disabled || isLoading}
            onClick={onClick}
            className={clsx('flex items-center justify-center text-sm rounded transition-colors duration-150', className, variants[variant][color], {
                'px-[16px] py-[10px]': variant !== 'icon',
                'p-3': variant === 'icon',
                border: variant === 'outline',
            })}
        >
            {isLoading && <MoonLoader size={16} color="white" className="mr-3" />}
            {children}
        </button>
    );
}
