import { useState } from "react"

export const CreateAccount = (props) => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const updateConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.password !== confirmPassword) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
            // Call the onSubmit function passed as a prop
            props.onSubmit(event);
        }
    }

    return (
        <form className='card-body p-8' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor='email-input' className='label'>
                <span className='label-text'>Your Email</span>
                </label>
                <input
                    id='email-input'
                    type='text'
                    className='input input-bordered'
                    value={props.email}
                    onChange={props.updateRegEmail}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='password-input' className='label'>
                <span className='label-text'>Create a Password</span>
                </label>
                <input
                id='password-input'
                    type='password'
                    className='input input-bordered'
                    value={props.password}
                    onChange={props.updateRegPassword}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='confirm-password-input' className='label'>
                <span className='label-text'>Confirm Password</span>
                </label>
                <input
                id='confirm-password-input'
                    type='password'
                    className='input input-bordered'
                    value={confirmPassword}
                    onChange={updateConfirmPassword}
                />
            </div>
            {!passwordMatch && <p className='py-6 text-center'>The passwords don't match!</p>}
            <div className='form-control my-6 h-auto'>
                <button type='submit' className='btn btn-primary mb-4'>Create Account</button>
            </div>
        </form>
    )
}
