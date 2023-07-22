import { axiosClient } from "src/lib/axios-client"

export const fetchProjects = async () => {
    const res = await axiosClient.get("/project");

    return res.data.data;
}