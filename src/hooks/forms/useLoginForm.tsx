import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { loginUserMutation } from 'src/lib/react-query/mutations/auth.mut';
import { loginValidation, signupValidation } from 'src/lib/validators/forms.validator';
import { UserLogin, UserSignup } from 'src/models/user.model';

export default function useLoginForm() {
    const router = useRouter();

    const { isLoading, mutateAsync } = useMutation(loginUserMutation, {
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
            router.replace('/projects');
        },
    });

    const initializeValues: UserLogin = {
        email: '',
        password: '',
    };

    const formik = useFormik({
        initialValues: initializeValues,
        validationSchema: loginValidation,
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
