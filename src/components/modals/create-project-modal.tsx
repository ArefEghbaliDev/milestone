import useCreateProjectForm from 'src/hooks/forms/useCreateProjectForm';
import Button from '../ui/atoms/button';
import TextField from '../ui/atoms/textfield';
import Modal from '../ui/molecules/modal';

export default function CreateProjectModal() {
    const { formik, isLoading } = useCreateProjectForm();

    return (
        <Modal title="Create Project">
            <TextField
                type="text"
                name="title"
                placeholder="Title"
                label="Project Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.errors.title}
            />
            <div className="flex items-center justify-end mt-5">
                <Button type="button" color="primary" variant="contained" onClick={formik.submitForm} isLoading={isLoading}>
                    Create
                </Button>
            </div>
        </Modal>
    );
}
