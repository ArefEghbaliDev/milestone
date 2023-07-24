import Link from 'next/link';
import { Project } from 'src/models/project.model';

type ProjectItemProps = {
    project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
    return (
        <Link
            href={`/projects/p/${project.project_key}`}
            className="rounded p-5 border border-dark-100 transition-colors duration-150 hover:bg-dark-100"
        >
            <p className="font-medium">{project.title}</p>
            <p>{project.project_key}</p>
        </Link>
    );
}
