import React, {useContext, useState} from 'react';
import logo from "../../img/Rectangle.svg"
import {Link, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";
import {MdNightlight, MdOutlineDarkMode} from "react-icons/md";
import {FaSearch} from "react-icons/fa";


const Header = ({setMode, mode}) => {
    const [value, setValue] = useState("")
    const changeTheme = () => {
        setMode(!mode)
        localStorage.setItem("mode", JSON.stringify(!mode))
    }

    const {setLanguage} = useContext(LanguageContext)
    const handleChange = (e) => setValue(e.target.value)
    const navigate = useNavigate()

    const navigateToResult = () => {
        navigate(`/movies/search-result/${value}`)
        setValue("")
    }
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-ogo">
                        <Link to={"/"}> <img src={logo} alt=""/></Link>
                    </div>

                    <nav className="header-nav">
                        <Link to={"/recipes"}>Recipes</Link>
                        <Link to={"/popular"}>Popular</Link>
                        <Link to={"/top-rated"}>TopRated</Link>
                    </nav>


                    <div className="header-buttons">
                        <select onChange={(e) => setLanguage(e.target.value)}>
                            <option value="en-US">english</option>
                            <option value="ru-RU">russia</option>
                            <option value="fr-FR">franc</option>
                            <option value="tr-TR">turkey</option>
                        </select>
                    </div>

                    <div className="search-movies">
                        <input
                            value={value}
                            onChange={handleChange} type="text"/>
                        <button onClick={navigateToResult} className="ml-16 mt-10 flex justify-between items-center"><FaSearch className="ml-16"/></button>
                    </div>

                    <div onClick={changeTheme} className="dark-mode py-2 px-4 ">
                        {mode ? <MdOutlineDarkMode className="text-amber-300 text-2xl"/>: <MdOutlineDarkMode className="text-white text-2xl"/>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;