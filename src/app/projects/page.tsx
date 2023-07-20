import Button from 'src/components/ui/atoms/button';
import Navbar from 'src/components/ui/molecules/navbar';

export default function ProjectsPage() {
    return (
        <div className="max-w-container mx-auto py-5">
            <Navbar />
            <div className="flex items-center justify-between mt-10">
                <h2 className="font-bold text-2xl">Projects</h2>
                <Button type="button" color="primary" variant="contained">
                    Create Project
                </Button>
            </div>
        </div>
    );
}
