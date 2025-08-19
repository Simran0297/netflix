import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div className="absolute bg-blue-950 text-white my-20 p-3 mx-2">
      <p>You are Signed In As: </p>
      <p>{user.displayName}</p>
      <button
        className="bg-red-500 my-2 mx-12 w-20 p-2 rounded-md "
        onClick={handleSignOut}
      >
        Sign Out{" "}
      </button>
    </div>
  );
};

export default Signout;
