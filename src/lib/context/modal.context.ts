import { createContext } from "react";

export type Modals = "create-project";

export type Modal<T = any> = {
    options?: T;
    modalName: Modals
}

type ModalContext = {
    modalName: Modals;
    showModal: (modalName: Modals) => void;
    closeModal: () => void;
}

export const modalContext = createContext<ModalContext | null>(null);