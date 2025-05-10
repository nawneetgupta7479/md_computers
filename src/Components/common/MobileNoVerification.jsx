import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Accept 'mode' prop ('login' or 'signup')
const MobileNoVerification = ({ mode = 'login' }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  // --- Text content based on mode ---
  const isLoginMode = mode === 'login';
  const pageTitle = isLoginMode ? 'Login' : 'Looks like you are new here!';
  const pageSubtitle = isLoginMode
    ? 'Get access to your Orders, Wishlist and Recommendations'
    : 'Sign up to get started with City Computers!';
  const bottomLinkText = isLoginMode ? 'Create an account' : 'Sign in';
  const bottomLinkHref = isLoginMode ? '/signup' : '/login';
  const bottomPromptText = isLoginMode ? 'New to City Computers?' : 'Already have an account?';
  const verifyButtonText = isLoginMode ? 'Login' : 'Register'; // Changed verify button text

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobileNumber.length === 10 && /^\d+$/.test(mobileNumber)) {
      console.log('Simulating OTP send for:', mobileNumber);
      setStep(2);
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length === 6 && /^\d+$/.test(otp)) {
      console.log('Simulating OTP verification for:', otp);
      alert(`${pageTitle} Successful (Simulated)`); // Use dynamic title
      // Reset or navigate away
      // setStep(1);
      // setMobileNumber('');
      // setOtp('');
    } else {
      alert('Please enter the 6-digit OTP.');
    }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const editMobileNumber = () => {
    setStep(1);
    setOtp('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex w-full max-w-4xl bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        {/* Left Side: Image and Text */}
        <div className="hidden md:flex flex-col justify-between w-2/5 bg-yellow-500 p-8 text-gray-900"> {/* Changed bg-primary to bg-yellow-500 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{pageTitle}</h2> {/* Use dynamic title */}
            <p className="text-base font-medium">
              {pageSubtitle} {/* Use dynamic subtitle */}
            </p>
          </div>
          <div>
            <img src="/laptops.jpg" alt={`${pageTitle} Visual`} className="w-full h-auto object-cover rounded" /> {/* Dynamic alt text */}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-3/5 p-8 sm:p-12 flex flex-col justify-center"> {/* Added flex flex-col justify-center */}
          {step === 1 && (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                 <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                   Enter Mobile Number
                 </label>
                 <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400 text-sm">+91</span>
                    <input
                        id="mobile-number"
                        name="mobileNumber"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={mobileNumber}
                        onChange={handleNumberChange}
                        className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="10-digit mobile number"
                        maxLength={10}
                    />
                 </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                By continuing, you agree to City Computer's{' '}
                <Link to="/terms-of-service" className="font-medium text-yellow-600 hover:text-yellow-500">Terms of Use</Link> and{' '}
                <Link to="/privacy-policy" className="font-medium text-yellow-600 hover:text-yellow-500">Privacy Policy</Link>.
              </p>

              <button
                type="submit"
                disabled={mobileNumber.length !== 10}
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-800 transition duration-150 ease-in-out"
              >
                Request OTP
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
               <div>
                 <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Please enter the OTP sent to:</p>
                 <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">+91 {mobileNumber}</p>
                    <button
                        type="button"
                        onClick={editMobileNumber}
                        className="text-xs font-medium text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300 focus:outline-none"
                    >
                        Change?
                    </button>
                 </div>
                 <label htmlFor="otp" className="sr-only">Enter OTP</label>
                 <input
                    id="otp"
                    name="otp"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                    value={otp}
                    onChange={handleOtpChange}
                    className="appearance-none block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white tracking-widest text-center"
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                 />
               </div>

               <div className="text-center text-xs">
                 <button
                    type="button"
                    // onClick={handleResendOtp}
                    className="font-medium text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300 focus:outline-none"
                 >
                    Resend OTP
                 </button>
               </div>

              <button
                type="submit"
                disabled={otp.length !== 6}
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-800 transition duration-150 ease-in-out"
              >
                {verifyButtonText} {/* Use dynamic button text */}
              </button>
            </form>
          )}

          {/* Dynamic bottom link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {bottomPromptText}{' '}
              <Link to={bottomLinkHref} className="font-medium text-yellow-600 hover:text-yellow-500">
                {bottomLinkText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNoVerification;