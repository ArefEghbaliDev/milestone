'use client';

import { useContext } from 'react';
import { modalContext } from 'src/lib/context/modal.context';

export default function useModalContext() {
    return useContext(modalContext);
}
