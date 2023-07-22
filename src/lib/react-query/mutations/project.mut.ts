import { axiosClient } from "src/lib/axios-client";
import { Project,ProjectCreate } from "src/models/project.model";
import { queryClient } from "..";

export const createProjectMutation = async (data: ProjectCreate) => {
    const res = await axiosClient.post("/project",data);

    queryClient.setQueryData<Project[] | undefined>(["projects"],oldData => {
        if (!oldData) return [];

        return [res.data.data,oldData]
    })
}