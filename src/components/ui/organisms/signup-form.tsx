'use client';

import { styled } from 'styled-components';
import TextField from '../atoms/textfield';
import Button from '../atoms/button';

const Wrapper = styled.div.attrs({
    className: 'flex flex-col items-stretch justify-start',
})`
    width: 320px;
`;

export default function SignupForm() {
    return (
        <Wrapper>
            <h1 className="font-bold text-2xl">Create Account.</h1>
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
        </Wrapper>
    );
}
