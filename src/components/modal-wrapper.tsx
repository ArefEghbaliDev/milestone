'use client';

import { ComponentProps, useState } from 'react';
import { Modal, modalContext } from 'src/lib/context/modal.context';
import CreateProjectModal from './modals/create-project-modal';

export default function ModalWrapper({ children }: ComponentProps<'div'>) {
    const [modal, setModal] = useState<Modal | null>(null);

    const showModal = (modal: Modal) => {
        setModal(modal);
    };

    const closeModal = () => {
        setModal(null);
    };

    const renderModal = () => {
        if (!modal) return null;

        switch (modal.modalName) {
            case 'create-project':
                return <CreateProjectModal />;
            default:
                return null;
        }
    };

    return (
        <modalContext.Provider value={{ showModal, closeModal }}>
            {renderModal()}
            {children}
        </modalContext.Provider>
    );
}
