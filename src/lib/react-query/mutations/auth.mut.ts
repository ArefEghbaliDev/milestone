import { axiosClient } from "src/lib/axios-client"
import { queryClient } from "src/lib/react-query";
import { User,UserLogin,UserSignup } from "src/models/user.model"

export const signupUserMutation = async (data: UserSignup) => {
    const res = await axiosClient.post('/auth/signup',data);

    queryClient.setQueryData<User>(["user"],oldData => res.data.data);
}

export const loginUserMutation = async (data: UserLogin) => {
    const res = await axiosClient.post('/auth/login',data);

    queryClient.setQueryData<User>(["user"],oldData => res.data.data);
}