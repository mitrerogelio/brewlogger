
export const SignIn = (props) => {

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
                <button type='submit' className='btn btn-primary mb-4'>Login</button>
            </div>
        </form>
    )
}
