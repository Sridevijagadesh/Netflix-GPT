import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { CheckValidation } from "../Util/Validation.js";
import { auth } from "../Util/Firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../Util/createslice.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const HandleCickevent = () => {
    const message = CheckValidation(
      email.current?.value || "",
      password.current?.value || "",
      !isSignIn ? username.current?.value || "" : "validUser",
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: username.current?.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/157561190?v=4&size=64",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );

              navigate("/browser");
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
              // ...
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorMessage, errorCode);
        });
    } else {
      //sing up logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage, errorCode);
        });
    }
  };
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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white  w-3/12 bg-black flex flex-col mx-auto right-0 left-0 top-0 p-12 my-36 bg-opacity-80 rounded-xl"
      >
        <h1>{!isSignIn ? "Sign UP" : "Sign IN"}</h1>
        {!isSignIn && (
          <input
            ref={username}
            placeholder="User Name"
            className="p-4 my-4 w-full bg-gray-900"
          ></input>
        )}

        <input
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full bg-gray-900"
        ></input>
        <input
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900"
          type="password"
        ></input>
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="p-4 my-4 w-full bg-red bg-red-600 rounded-[40px]"
          onClick={HandleCickevent}
        >
          {!isSignIn ? "Sign UP" : "Sign IN"}
        </button>
        <p className="cursor-pointer " onClick={HandleEvent}>
          {!isSignIn
            ? "New to Netflix? Sign Up now."
            : "Already have an account? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
