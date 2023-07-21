import Button from '../ui/atoms/button';
import TextField from '../ui/atoms/textfield';
import Modal from '../ui/molecules/modal';

export default function CreateProjectModal() {
    return (
        <Modal title="Create Project">
            <TextField type="text" name="title" placeholder="Title" label="Project Title" />
            <div className="flex items-center justify-end mt-5">
                <Button type="button" color="default" variant="text" className="mr-3">
                    Cancel
                </Button>
                <Button type="button" color="primary" variant="contained">
                    Create
                </Button>
            </div>
        </Modal>
    );
}
