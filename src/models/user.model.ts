interface IBaseUser {
    fullname: string;
    avatar: string | null;
    email: string;
    account_type: string;
}

export interface IUserSignup extends IBaseUser {
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUser extends IBaseUser {
    id: string;
    created_at: string;
}