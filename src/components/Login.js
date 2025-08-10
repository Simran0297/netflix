import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { formValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const navigate = useNavigate();
  

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  useEffect(() => {
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (fullName.current) fullName.current.value = "";
    setErrorMessage("");
  }, [isSignIn]);

  const handleSignIn = () => {
    const errorMessage = formValidate(
      email.current.value,
      password.current.value,
      !isSignIn ? fullName.current.value : undefined
    );
    setErrorMessage(errorMessage);
    if (errorMessage) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            
          })
            .then(() => {
    
              navigate("/browse")
            })
            .catch((error) => {
             setErrorMessage(error.message)
            });

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header disbleMenu={true} />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg
            "
          alt="Netflix-Background"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg absolute w-1/3 bg-black px-16 py-12 h-auto my-40 mx-auto left-0 right-0 bg-opacity-75 text-white"
      >
        <h1 className="font-bold text-3xl p-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className=" w-full py-3 text-center my-3 bg-gray-700 "
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className=" w-full py-3 text-center my-3 bg-gray-700 "
        ></input>
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className=" w-full py-3 text-center my-3 bg-gray-700"
        ></input>
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="w-full bg-red-700  py-3 text-center my-3  rounded-lg"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
