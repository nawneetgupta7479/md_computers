import React from 'react';
import MobileNoVerification from '../Components/common/MobileNoVerification'; // Correct import path
import CreateAccount from '../Components/signup/CreateAccount';

const Login = () => {
  // Render the verification component in 'login' mode
  return <MobileNoVerification mode="login" />;
  // return <CreateAccount/>
};

export default Login;
