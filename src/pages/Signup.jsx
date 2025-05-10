import React from 'react';
import MobileNoVerification from '../Components/common/MobileNoVerification'; // Correct import path

const Signup = () => {
  // Render the verification component in 'signup' mode
  return <MobileNoVerification mode="signup" />;
};

export default Signup;
