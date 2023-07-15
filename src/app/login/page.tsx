import LoginForm from 'src/components/ui/organisms/login-form';
import AuthTemplate from 'src/components/ui/templates/auth-template';

export default function LoginPage() {
    return (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
}
