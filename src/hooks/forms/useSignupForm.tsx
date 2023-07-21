import { useSignUp } from '@clerk/nextjs';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signupValidation } from 'src/lib/validators/forms.validator';
import { UserSignup } from 'src/models/user.model';

export default function useSignupForm() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [step, setStep] = useState<'idle' | 'confirm'>('idle');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const initializeValues: UserSignup = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        account_type: 'trial',
        avatar: null,
    };

    const formik = useFormik({
        initialValues: initializeValues,
        validationSchema: signupValidation,
        onSubmit: async (values) => {
            setIsLoading(true);
            if (!isLoaded) return;

            try {
                await signUp.create({
                    firstName: values.firstname,
                    lastName: values.lastname,
                    emailAddress: values.email,
                    password: values.password,
                });

                await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

                setStep('confirm');
                localStorage.setItem('isConfirm', 'true');
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        },
        validateOnChange: false,
    });

    return {
        formik,
        isLoading,
        step,
        setActive,
    };
}
