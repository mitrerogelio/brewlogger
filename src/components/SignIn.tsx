import React, {useState} from 'react';
import {sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../firebase/firebase-config';

interface IProps {
    updateLoginPassword: any;
    password: any;
    updateLoginEmail: any;
    onSubmit: any;
    email: string;
    props: React.ReactNode;
}

export const SignIn = (props: IProps) => {
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const resetPassword = async (event: React.MouseEvent) => {
        event.preventDefault();
        try {
            await sendPasswordResetEmail(auth, props.email);
            setSuccess(true);
        } catch (error: any) {
            console.log(error.message);
            setError(error.message);
        }
    };

    return (
        <form className="card-body p-4" onSubmit={props.onSubmit}>
            <div className="form-control">
                <label htmlFor="email-input" className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    id="email-input"
                    type="text"
                    className="input input-bordered"
                    value={props.email}
                    onChange={props.updateLoginEmail}
                />
            </div>
            <div className="form-control">
                <label htmlFor="password-input" className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    id="password-input"
                    type="password"
                    className="input input-bordered"
                    value={props.password}
                    onChange={props.updateLoginPassword}
                />
            </div>
            <div className="form-control my-6 h-auto">
                {success && <p className="py-6 text-center">An email has been sent to reset your password 🔐</p>}
                {error && <p className="error-message">An error has occurred.</p>}
                <button type="submit" className="btn btn-primary mb-4">Login</button>
                <button className="btn btn-error mb-4" onClick={resetPassword}>Reset Password</button>
            </div>
        </form>
    );
};
