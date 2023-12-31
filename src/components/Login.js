import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {

  const [userType, setUserType ] = useState("");

  const onInputChange = (e) => {
    setUserType(e.target.value);
  };

  const sigin = () =>{
    console.log(userType);
  }

  const { login } = useContext(AuthContext);
  
  return (
    <div className="bg-white py-10 flex justify-center items-center">
      <div className="w-full max-w-sm p-4 bg-slate-100 border-gray-700 rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6" action="" onSubmit={login}>
          <h5 className="text-2xl font-medium text-center text-black">
            Sign in to continue
          </h5>
          <select
            name="userType"
            id="userType"
            value={userType}
            onChange={onInputChange}
            className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          >
            <option value="customer">Customer</option>
            <option value="service_provider">Register As Professional</option>
          </select>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="•••••••••"
              className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-black"
              >
                Remember me
              </label>
            </div>
            <p
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </p>
          </div>
          <button
          onClick={sigin}
            type="submit"
            className="w-full text-white bg-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign in
          </button>
          <div className="text-sm font-medium text-black flex justify-between">
            Not registered?{" "}
            <Link
              to="/Signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            > 
              Create account
            </Link>
          </div>
          <div className="flex items-center mt-4">
            <div className="w-full border-t border-gray-300" />
            <p className="px-4 text-gray-600">Or</p>
            <div className="w-full border-t border-gray-300" />
          </div>
        </form>
        <button
            className="w-full mt-4 flex items-center justify-center bg-white hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-gray-400"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
              className="w-6 h-6 mr-2"
            />  
            Sign in with Google
          </button>
      </div>
    </div>
  );
}

export default Login;
