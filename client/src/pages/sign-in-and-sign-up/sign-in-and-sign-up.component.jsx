import React from 'react';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';
import SignIn from '../../compnents/signin/signin.component';
import SignUp from '../../compnents/sign-up/sign-up.component';


const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage