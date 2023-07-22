import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { createProjectMutation } from 'src/lib/react-query/mutations/project.mut';
import { createProjectValidation } from 'src/lib/validators/forms.validator';
import useModalContext from '../useModalContext';

type CreateProjectValues = {
    title: string;
};

export default function useCreateProjectForm() {
    const modalContext = useModalContext();

    const { mutateAsync, isLoading } = useMutation(createProjectMutation, {
        onSuccess: () => {
            if (!modalContext) return;

            modalContext.closeModal();
        },
    });

    const initialValues: CreateProjectValues = {
        title: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: createProjectValidation,
        onSubmit: async (values) => {
            await mutateAsync({ title: values.title });
        },
    });

    return {
        formik,
        isLoading,
    };
}
