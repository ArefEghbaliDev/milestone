'use client';

import TextField from '../atoms/textfield';
import Button from '../atoms/button';
import useSignupForm from 'src/hooks/forms/useSignupForm';
import useVerifySignupForm from 'src/hooks/forms/useVerifySignupForm';
import { useRef } from 'react';

export default function SignupForm() {
    const { formik, isLoading, step } = useSignupForm();
    const verifyForm = useVerifySignupForm({ data: formik.values });

    const isInConfirm = useRef(localStorage.getItem('isConfirm'));

    if (step === 'confirm' || isInConfirm.current) {
        return (
            <div className="flex flex-col items-stretch justify-start auth-form">
                <h1 className="font-bold text-2xl">Verification Code Sent</h1>
                <p>We sent an verification code to your email</p>
                <div className="mt-5">
                    <TextField
                        name="code"
                        placeholder="123456"
                        label="Verification Code"
                        type="text"
                        onChange={verifyForm.verifyFormik.handleChange}
                        value={verifyForm.verifyFormik.values.code}
                        error={verifyForm.verifyFormik.errors.code}
                    />
                </div>
                <div className="mt-5">
                    <Button
                        type="button"
                        onClick={verifyForm.verifyFormik.submitForm}
                        variant="contained"
                        color="primary"
                        className="w-full"
                        isLoading={verifyForm.isLoading}
                    >
                        Verify
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-stretch justify-start auth-form">
            <h1 className="font-bold text-2xl">Create Account.</h1>
            <div className="mt-5">
                <Button type="button" variant="outline" color="default" className="w-full">
                    Signup With Google
                </Button>
            </div>
            <div className="mt-5">
                <p className=" opacity-50 text-center">OR</p>
            </div>
            <div className="mt-5">
                <TextField
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    label="First Name"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={formik.errors.firstname}
                />
            </div>
            <div className="mt-5">
                <TextField
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    label="Last Name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={formik.errors.lastname}
                />
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
                    Create Account
                </Button>
            </div>
        </div>
    );
}
