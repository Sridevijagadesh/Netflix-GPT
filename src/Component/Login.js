import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const HandleEvent = (e) => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_large.jpg"
          alt="backgroung"
        />
      </div>

      <form className="absolute text-white  w-3/12 bg-black flex flex-col mx-auto right-0 left-0 top-0 p-12 my-36 bg-opacity-80 rounded-xl">
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {isSignIn && (
          <input
            placeholder="User Name"
            className="p-4 my-4 w-full bg-gray-900"
          ></input>
        )}

        <input
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900"
        ></input>
        <input
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900"
        ></input>
        <button className="p-4 my-4 w-full bg-red bg-red-600 rounded-[40px]">
          Sign IN
        </button>
        <p className="cursor-pointer " onClick={HandleEvent}>
          {isSignIn
            ? "New to Netflix? Sign Up now."
            : "Already have an account? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
