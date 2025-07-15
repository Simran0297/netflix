import { useState } from "react";
import Header from "./Header";

const Login = () =>{

    const [isSignIn, setIsSignIn]=useState(true);
    const toggleSignInForm =() =>{
        setIsSignIn(!isSignIn);
    }
    return (
        <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg
            " alt="Netflix-Background"></img>
        </div>
        
        <form className="rounded-lg absolute w-1/3 bg-black px-16 py-12 h-auto my-40 mx-auto left-0 right-0 bg-opacity-75 text-white"> 
            <h1 className="font-bold text-3xl p-3">{isSignIn? "Sign In":"Sign Up"}</h1>
            {!isSignIn &&  <input type="text" placeholder="Full Name" className=" w-full py-3 text-center my-3 bg-gray-700 " ></input>}
            <input type="text" placeholder="Email Address" className=" w-full py-3 text-center my-3 bg-gray-700 " ></input>
            <input type="password" placeholder="Password" className=" w-full py-3 text-center my-3 bg-gray-700" ></input>
            <button className="w-full bg-red-700  py-3 text-center my-3  rounded-lg">Sign In</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignIn? "New to Netflix? Sign up Now":"Already registered? Sign In"}</p>
        </form>
        
        </div>
    )
}

export default Login;