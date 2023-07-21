'use client';

import { ComponentProps } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'src/lib/react-query';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalWrapper from './modal-wrapper';

export default function Providers({ children }: ComponentProps<'div'>) {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <ModalWrapper>{children}</ModalWrapper>
        </QueryClientProvider>
    );
}
