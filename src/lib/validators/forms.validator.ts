import { object,string,} from 'yup';

export const signupValidation = object({
    fullname: string().required("Full Name is required!").min(4,"Too Short").max(50,"Too Long"),
    email: string().email("Invalid email address").required("Email is required!"),
    password: string().required("Password is required!").min(8,"Too Short").max(24,"Too Long")
});

export const loginValidation = object({
    email: string().email("Invalid email address").required("Email is required!"),
    password: string().required("Password is required!").min(8,"Too Short").max(24,"Too Long")
});