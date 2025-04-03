import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Layout from "../../Components/Layout";
const Login = () => {
    const [view, setView] = useState('user-info');
    const renderLogin = () =>{
        return(
          <div className=" p-8 rounded-lg shadow-lg w-full max-w-sm mx-auto mt-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                Sign In
              </h1>
            </div>
    
            {/* Sign In Form */}
            <form className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
    
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
    
              {/* Sign In Button */}
              
              {/* <button
                type="button"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg shadow-md text-lg focus:outline-none"
                onClick={() => handleSignIn()}
              >
                Log In
              </button> */}
            </form>
    
            {/* Forgot Password Link */}
            <div className="text-center mt-4">
              <NavLink className="text-violet-600 hover:text-violet-700 text-sm">
                Forgot your password?
              </NavLink>
            </div>
    
            {/* Sign Up Link */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-400">
                Don't have an account?
                {/* <button 
                className="text-violet-600 hover:text-violet-700 text-sm cursor-pointer"
                onClick={() => setView('create-user-info')}
                >
                  Sign up
                </button> */}
              </p>
            </div>
          </div>
        )
      }
      const renderRegister = () =>{
        return(
            <div>
                <h1>Contenido de Registro de cursos</h1>
            </div>
        )
      }
    const renderView = () => view === 'create-user-info'?renderRegister(): renderLogin()
    return(
        <Layout>
        {renderView()}
        </Layout>
    )
}

export default Login;