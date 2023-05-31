import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'


export const SignIn = (props) => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const resetPassword = async (event) => {
        event.preventDefault()
        try {
            await sendPasswordResetEmail(auth, props.email)
            setSuccess(true)
          } catch (error) {
            console.log(error.message)
            setError(true)
          }
    }    

    return (
        <form className='card-body p-4' onSubmit={props.onSubmit}>
            <div className='form-control'>
                <label htmlFor='email-input' className='label'>
                <span className='label-text'>Email</span>
                </label>
                <input
                    id='email-input'
                    type='text'
                    className='input input-bordered'
                    value={props.email}
                    onChange={props.updateLoginEmail}
                 />
            </div>
            <div className='form-control'>
                <label htmlFor='password-input' className='label'>
                <span className='label-text'>Password</span>
                </label>
                <input
                    id='password-input'
                    type='password'
                    className='input input-bordered'
                    value={props.password}
                    onChange={props.updateLoginPassword}
                />
            </div>
            <div className='form-control my-6 h-auto'>
                {success && <p className='py-6 text-center'>An email has been sent to reset your password 🔐</p>}
                {error && <p className='error-message'>An error has ocurred.</p>}
                <button type='submit' className='btn btn-primary mb-4'>Login</button>
                <button className='btn btn-error mb-4' onClick={resetPassword}>Reset Password</button>
            </div>
        </form>
    )
}
