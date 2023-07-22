import { Project } from "src/models/project.model";
import { axiosClient } from "src/lib/axios-client"

export const fetchProjects = async () => {
    const res = await axiosClient.get("/project");

    const data: Project[] = res.data.data;

    const mappedResult = data.map((project): Project => {
        return {
            id: project.id,
            title: project.title,
            created_at: project.created_at,
            creator: project.creator,
            project_key: project.project_key
        }
    })

    return mappedResult;
}