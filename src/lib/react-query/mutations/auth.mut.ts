import { axiosClient } from "src/lib/axios-client"
import { queryClient } from "src/lib/react-query";
import { IUser,IUserLogin,IUserSignup } from "src/models/user.model"

export const signupUserMutation = async (data: IUserSignup) => {
    const res = await axiosClient.post('/auth/signup',data);

    queryClient.setQueryData<IUser>(["user"],oldData => res.data.data);
}

export const loginUserMutation = async (data: IUserLogin) => {
    const res = await axiosClient.post('/auth/login',data);

    queryClient.setQueryData<IUser>(["user"],oldData => res.data.data);
}