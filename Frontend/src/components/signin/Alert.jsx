const Alert = ({ passwordError, signinSuccess }) => {
    const handelErrorMessage = () => {
      if (passwordError.msg === "") {
        return <></>;
      }
  
      if (!passwordError.valid) {
        return (
          <div role="alert" className="alert alert-warning w-80 p-2 mt-4 flex items-center bg-yellow-100 border-l-4 border-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 mr-2 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="text-yellow-800">{passwordError.msg}</span>
          </div>
        );
      }
  
      if (signinSuccess.success !== null && !signinSuccess.success) {
        return (
          <div role="alert" className="alert alert-warning w-80 p-2 mt-4 flex items-center bg-yellow-100 border-l-4 border-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 mr-2 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="text-yellow-800">{signinSuccess.msg}</span>
          </div>
        );
      }
  
      return (
        <div role="alert" className="alert alert-success w-80 p-2 mt-4 flex items-center bg-green-100 border-l-4 border-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6 mr-2 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-green-800">All Set</span>
        </div>
      );
    };
  
    return <>{handelErrorMessage()}</>;
  };
  
  export default Alert;
  