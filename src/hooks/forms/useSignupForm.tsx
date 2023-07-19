import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { signupUserMutation } from 'src/lib/react-query/mutations/auth.mut';
import { signupValidation } from 'src/lib/validators/forms.validator';
import { UserSignup } from 'src/models/user.model';

export default function useSignupForm() {
    const router = useRouter();

    const { isLoading, mutateAsync } = useMutation(signupUserMutation, {
        onError: (error: any) => {
            if (error.response.data) {
                toast(error.response.data.message, {
                    type: 'error',
                    position: 'top-center',
                });
            } else {
                toast(error, {
                    type: 'error',
                    position: 'top-center',
                });
            }
        },
        onSuccess: () => {
            router.replace('/confirmation');
        },
    });

    const initializeValues: UserSignup = {
        fullname: '',
        email: '',
        password: '',
        account_type: 'trial',
        avatar: null,
    };

    const formik = useFormik({
        initialValues: initializeValues,
        validationSchema: signupValidation,
        onSubmit: async (values) => {
            await mutateAsync(values);
        },
        validateOnChange: false,
    });

    return {
        formik,
        isLoading,
    };
}
