import {AiOutlineMenu} from "react-icons/ai";
import {FiChevronDown} from "react-icons/fi"
import LoginSignin from "./login signin/LoginSignin";
import Logo from "./logo/Logo";
import SearchBar from "./searchbar/SearchBar";
import UserOptions from "./user options/UserOptions";
import "./header.css";
import { useState } from "react";
import { loginStatus } from "../index";



function Header(){
    
    const [isLogged, setIslogged] = useState(false);

    loginStatus.activateState(setIslogged);

    const [arrowMenu, setArrowMenu] = useState(false)

    const [sideMenu, setSideMenu] = useState(false)


    function showArrowMenu(){
        setArrowMenu(!arrowMenu)
    }

    function showSideMenu(){
        setSideMenu(!sideMenu)
    }

    return(
        <div className="header" >
            <div className="firstContainer">
                <AiOutlineMenu className="AiOutlineMenu" onClick={showSideMenu} />
                <Logo/>
                
            </div>

            <div className="arrowMenu" >
                <FiChevronDown className="FiChevronDown" onClick={showArrowMenu} />
            </div>

            <SearchBar show={arrowMenu}/> 

            {loginStatus.state ? <UserOptions className="secondContainer"/> : <LoginSignin className="secondContainer"/>}
        </div>
    )
};

export default Header;