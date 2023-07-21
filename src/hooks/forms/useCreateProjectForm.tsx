import { useFormik } from 'formik';
import { createProjectValidation } from 'src/lib/validators/forms.validator';

type CreateProjectValues = {
    title: string;
};

export default function useCreateProjectForm() {
    const initialValues: CreateProjectValues = {
        title: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: createProjectValidation,
        onSubmit: async (values) => {},
    });
}
