import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={() => loginWithRedirect()}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300"
      >
        Signup with Google
      </button>
    </div>
  );
};

export default Signup;
