import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import SignupForm from 'src/components/ui/organisms/signup-form';
import AuthTemplate from 'src/components/ui/templates/auth-template';

export default async function SignupPage() {
    const user = await currentUser();

    if (user) {
        redirect('/projects');
    }

    return (
        <AuthTemplate>
            <SignupForm />
            <div className="flex flex-col items-center justify-center w-2/3 mx-auto">
                <h2 className="font-bold text-3xl text-center">
                    Boost Productivity and Streamline Projects with Our AI-Powered Project Management Platform
                </h2>
                <p className="text-center opacity-75 mt-2">
                    Unlock Your Team's Full Potential – Sign up Today for Enhanced Collaboration and Efficient Task Management!
                </p>
            </div>
        </AuthTemplate>
    );
}
