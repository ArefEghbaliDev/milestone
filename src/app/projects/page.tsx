'use client';

import { useQuery } from '@tanstack/react-query';
import Button from 'src/components/ui/atoms/button';
import Navbar from 'src/components/ui/molecules/navbar';
import useOpenModal from 'src/hooks/useOpenModal';
import { fetchProjects } from 'src/lib/react-query/queries/project.query';

export default function ProjectsPage() {
    const { data } = useQuery(['projects'], fetchProjects);
    const { openModal } = useOpenModal('create-project');

    return (
        <div className="max-w-container mx-auto py-5">
            <Navbar />
            <div className="flex items-center justify-between mt-10">
                <h2 className="font-bold text-2xl">Projects</h2>
                <Button type="button" color="primary" variant="contained" onClick={openModal}>
                    Create Project
                </Button>
            </div>
        </div>
    );
}
