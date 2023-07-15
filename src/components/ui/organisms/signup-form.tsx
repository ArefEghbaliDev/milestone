'use client';

import TextField from '../atoms/textfield';
import Button from '../atoms/button';

export default function SignupForm() {
    return (
        <div className="flex flex-col items-stretch justify-start auth-form">
            <h1 className="font-bold text-2xl">Create Account.</h1>
            <div className="mt-5">
                <Button type="button" variant="outline" color="default" className="w-full">
                    Signup With Google
                </Button>
            </div>
            <div className="mt-5">
                <p className="text-sm opacity-50 text-center">OR</p>
            </div>
            <div className="mt-5">
                <TextField type="text" name="fullname" placeholder="Full Name" label="Full Name" />
            </div>
            <div className="mt-5">
                <TextField type="text" name="email" placeholder="Email" label="Email" />
            </div>
            <div className="mt-5">
                <TextField type="passowrd" name="password" placeholder="Password" label="Password" />
            </div>
            <div className="mt-5">
                <Button type="button" variant="contained" color="primary" className="w-full">
                    Create Account
                </Button>
            </div>
        </div>
    );
}
