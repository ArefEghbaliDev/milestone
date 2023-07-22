import { useSignUp } from '@clerk/nextjs';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { axiosClient } from 'src/lib/axios-client';
import { signupVerifyValidation } from 'src/lib/validators/forms.validator';
import { UserCreate, UserSignup } from 'src/models/user.model';

type VerifySignUpProps = {
    data: UserSignup;
};

export default function useVerifySignupForm({ data }: VerifySignUpProps) {
    const { signUp, setActive, isLoaded } = useSignUp();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const verifyFormik = useFormik({
        initialValues: {
            code: '',
        },
        validationSchema: signupVerifyValidation,
        onSubmit: async (values) => {
            if (!isLoaded) return;
            setIsLoading(true);

            const completed = await signUp.attemptEmailAddressVerification({
                code: values.code,
            });

            if (completed.status !== 'complete') {
                // TODO
                // show error alert
                setIsLoading(false);
            } else {
                await setActive({ session: completed.createdSessionId });

                console.log('id', completed?.id);

                const payload: UserCreate = {
                    id: completed.id!,
                    email: data.email,
                    account_type: data.account_type,
                };

                await axiosClient.post('/auth/user', payload);

                setIsLoading(false);
                localStorage.removeItem('isConfirm');
                router.replace('/projects');
            }
        },
    });

    return {
        verifyFormik,
        isLoading,
    };
}
