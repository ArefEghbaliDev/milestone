'use client';

import { Modals } from 'src/lib/context/modal.context';
import useModalContext from './useModalContext';

export default function useOpenModal(modalName: Modals) {
    const modalContext = useModalContext();

    const openModal = () => {
        if (!modalContext) return;

        modalContext.showModal({
            modalName: modalName,
        });
    };

    return { openModal };
}
