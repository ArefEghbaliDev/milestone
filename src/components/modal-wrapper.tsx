import { ComponentProps, useState } from 'react';
import { Modal, modalContext } from 'src/lib/context/modal.context';

export default function ModalWrapper({ children }: ComponentProps<'div'>) {
    const [modal, setModal] = useState<Modal | null>(null);

    const renderModal = () => {
        if (!modal) return null;

        switch (modal.modalName) {
            case 'create-project':
                return null;
            default:
                return null;
        }
    };

    return (
        <modalContext.Provider value={null}>
            {renderModal()}
            {children}
        </modalContext.Provider>
    );
}
