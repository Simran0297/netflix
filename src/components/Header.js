import { faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Signout from './Signout';

const Header = ({disbleMenu=false}) => {

  const [buttonclick,setButtonClick] = useState(false)
  const handleClick=()=>{
      if(disbleMenu) return ;
      setButtonClick(!buttonclick)
  }
  return (
    <div className="absolute w-full px-7 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      ></img>

      <div className="flex justify-center">
        <img className="w-14 h-14 mx-8 my-3" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" />
        <button type='button' className="p-2 w-9 h-9 my-6 rounded-md bg-slate-600" onClick={handleClick}>
          {!buttonclick ? <FontAwesomeIcon className=" text-white text-lg" icon={faCaretDown}/> : <FontAwesomeIcon className=" text-white text-lg" icon={faCaretUp}/> }
        </button>
        {buttonclick && <Signout/> }
       
      </div>
      
    </div>
    
  );
};

export default Header;
