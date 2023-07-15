import { Inter } from 'next/font/google';
import Button from './components/ui/atoms/button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={inter.className}>
            <Button type="button" variant="contained" color="primary">
                Create Account
            </Button>
        </main>
    );
}
