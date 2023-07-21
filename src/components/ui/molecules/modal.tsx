'use client';

import { Transition, Dialog } from '@headlessui/react';
import { ComponentProps, Fragment } from 'react';
import useModalContext from 'src/hooks/useModalContext';

type ModalProps = ComponentProps<'div'> & {
    title: string;
};

export default function Modal({ title, children }: ModalProps) {
    const modalContext = useModalContext();

    const closeModal = () => {
        if (!modalContext) return;

        modalContext.closeModal();
    };

    return (
        <Transition appear show={true} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="p-5 transform overflow-hidden rounded bg-dark-200 border border-dark-100 text-left align-middle transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-powder-500">
                                    {title}
                                </Dialog.Title>
                                <div className="mt-5">{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
