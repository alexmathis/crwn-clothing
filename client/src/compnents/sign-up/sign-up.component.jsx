import React, {useState}from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';
import './sign-up.styles.scss';

const SignUp = () => {
  
  const dispatch = useDispatch();
  const signUpStartHandler = userCredentials => dispatch(signUpStart(userCredentials));

  const [userCredentials, setUserCredentitals] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
  })
  
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStartHandler({ email, password, displayName });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentitals({...userCredentials, [name]: value });
  };
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  
}


export default SignUp;