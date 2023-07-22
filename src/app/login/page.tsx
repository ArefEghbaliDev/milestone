import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import LoginForm from 'src/components/ui/organisms/login-form';
import AuthTemplate from 'src/components/ui/templates/auth-template';

export default async function LoginPage() {
    const user = await currentUser();

    if (user) {
        redirect('/projects');
    }

    return (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
}
