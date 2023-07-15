'use client';

import TextField from '../atoms/textfield';
import Button from '../atoms/button';
import useLoginForm from 'src/hooks/forms/useLoginForm';

export default function LoginForm() {
    const { formik, isLoading } = useLoginForm();

    return (
        <div className="flex flex-col items-stretch justify-start auth-form">
            <h1 className="font-bold text-2xl">Welcome Back.</h1>
            <div className="mt-5">
                <Button type="button" variant="outline" color="default" className="w-full">
                    Continue With Google
                </Button>
            </div>
            <div className="mt-5">
                <p className="text-sm opacity-50 text-center">OR</p>
            </div>
            <div className="mt-5">
                <TextField
                    type="text"
                    name="email"
                    placeholder="Email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
            </div>
            <div className="mt-5">
                <TextField
                    type="password"
                    name="password"
                    placeholder="Password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
            </div>
            <div className="mt-5">
                <Button type="button" variant="contained" color="primary" className="w-full" onClick={formik.submitForm} isLoading={isLoading}>
                    Login
                </Button>
            </div>
        </div>
    );
}
