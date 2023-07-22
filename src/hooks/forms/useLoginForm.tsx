import { SignIn, useSignIn } from '@clerk/nextjs';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUserMutation } from 'src/lib/react-query/mutations/auth.mut';
import { loginValidation } from 'src/lib/validators/forms.validator';
import { UserLogin } from 'src/models/user.model';

export default function useLoginForm() {
    const router = useRouter();
    const { signIn, isLoaded, setActive } = useSignIn();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const initializeValues: UserLogin = {
        email: '',
        password: '',
    };

    const formik = useFormik({
        initialValues: initializeValues,
        validationSchema: loginValidation,
        onSubmit: async (values) => {
            if (!isLoaded) return;

            setIsLoading(true);
            try {
                const completed = await signIn.create({
                    identifier: values.email,
                    password: values.password,
                });

                if (completed.status === 'complete') {
                    setActive({ session: completed.createdSessionId });
                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                }
            } catch (err) {
                console.error(err);
            } finally {
                router.replace('/projects');
            }
        },
        validateOnChange: false,
    });

    return {
        formik,
        isLoading,
    };
}
