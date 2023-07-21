import { object,string,} from 'yup';

export const signupValidation = object({
    firstname: string().required("First Name is required!").min(4,"Too Short").max(20,"Too Long"),
    lastname: string().required("Last Name is required!").min(4,"Too Short").max(20,"Too Long"),
    email: string().email("Invalid email address").required("Email is required!"),
    password: string().required("Password is required!").min(8,"Too Short").max(24,"Too Long")
});

export const signupVerifyValidation = object({
    code: string().required("Verification Code is required").length(6,"Invalid verification code")
})

export const loginValidation = object({
    email: string().email("Invalid email address").required("Email is required!"),
    password: string().required("Password is required!").min(8,"Too Short").max(24,"Too Long")
});

export const createProjectValidation = object({
    title: string().required("Project Title is required.").min(8,"Too Short").max(50,"Too Long")
})