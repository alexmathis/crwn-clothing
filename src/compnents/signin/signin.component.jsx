import React, { useState}from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';

const SignIn = () => {

    const dispatch = useDispatch();
    const emailSignInStartHandler = (email, password) => dispatch(emailSignInStart({ email, password }));
    const googleSignInStartClickHandler = () => dispatch(googleSignInStart());

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
      
        emailSignInStartHandler(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentials, [name]: value })
    }
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        value={email}
                        handleChange={handleChange}
                        label='email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStartClickHandler} isGoogleSignIn>
                            {''}
                            Sign In with Google{''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
}
 
export default SignIn;