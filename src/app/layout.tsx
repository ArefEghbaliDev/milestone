import { ClerkProvider } from '@clerk/nextjs';
import Providers from 'src/components/providers';
import 'src/styles/main.scss';

export const metadata = {
    title: 'Milestone',
    description: 'AI Powered project management platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <ClerkProvider>
                    <Providers>{children}</Providers>
                </ClerkProvider>
            </body>
        </html>
    );
}
