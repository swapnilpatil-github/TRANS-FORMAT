// src/components/Login.jsx
import React from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL || "https://trans-format.onrender.com";;
    window.location.href = `${apiUrl}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Login to Your Account</h2>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md cursor-pointer transition duration-300 w-full"
        >
          <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 6v2m6-8h-2m-2 0h-4m-2 4H6m-2 0a8 8 0 018-8c1.657 0 3 1.343 3 3zm-4-6a9.001 9.001 0 00-8.155 12.764l-3.037 3.036A1.52 1.52 0 003 22.5a1.5 1.5 0 001.5-1.5c0-.73-.528-1.361-1.257-1.482l3.033-3.033A9.001 9.001 0 1012 4zm0 0v6m0 2v-2" />
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
