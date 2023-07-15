import clsx from 'clsx';
import { ComponentProps } from 'react';

type TTextfieldProps = ComponentProps<'input'> & {
    error?: string;
    label?: string;
};

export default function TextField({ name, value, onChange, placeholder, label, error, type }: TTextfieldProps) {
    return (
        <div className="flex flex-col items-start justify-start">
            {label && <label className="font-medium text-sm mb-1">{label}</label>}
            <div
                className={clsx('flex items-center justify-between w-full rounded border border-gray-200 focus-within:border-primary-500', {
                    'border-rose-500': error,
                })}
            >
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="flex-1 rounded px-5 py-3 outline-none focus:outline-none text-sm"
                />
            </div>
            {error && <span className="mt-1 text-sm text-rose-500">{error}</span>}
        </div>
    );
}
