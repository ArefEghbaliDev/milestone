import { axiosClient } from "src/lib/axios-client"

export const getUser = async () => {
    const res = await axiosClient.get('/auth/user');

    return res.data.data;
}