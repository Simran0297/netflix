import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Signout from "./Signout";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";

const Header = () => {
  const [buttonclick, setButtonClick] = useState(false);
  const handleClick = () => {
    setButtonClick(!buttonclick);
  };
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //is called when component unmounts
    return ()=> unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-7 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
      ></img>

      {user && (
        <div className="flex justify-center">
          <img
            className="w-14 h-14 mx-8 my-3"
            src={USER_LOGO}
          />
          <button
            type="button"
            className="p-2 w-9 h-9 my-6 rounded-md bg-slate-600"
            onClick={handleClick}
          >
            {!buttonclick ? (
              <FontAwesomeIcon
                className=" text-white text-lg"
                icon={faCaretDown}
              />
            ) : (
              <FontAwesomeIcon
                className=" text-white text-lg"
                icon={faCaretUp}
              />
            )}
          </button>
          {buttonclick && <Signout />}
        </div>
      )}
    </div>
  );
};

export default Header;
