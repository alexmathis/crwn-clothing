import React from 'react';
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../compnents/signin/signin.component';
import SignUp from '../../compnents/sign-up/sign-up.component';


const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage