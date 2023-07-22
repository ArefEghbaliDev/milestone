interface BaseUser {
    firstname: string;
    lastname: string;
    avatar: string | null;
    email: string;
    account_type: string;
}

export interface UserSignup extends BaseUser {
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface User extends BaseUser {
    id: string;
    created_at: string;
}

export interface UserCreate {
    id: string;
    email: string;
    account_type: string;
}