import './Home.css';
import React, {useRef} from "react"
import image from "../../HomeChef_images/MainPageImages/logorond.png"
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    const inputRef = useRef();
    return( 
        <header>
        <div className="App-header">
            <div className='smlLogo'>
                <img className ='smallLogo' src={image} alt="Brand Logo"></img>
            </div>
            <div action="" className="search-bar">
            <input
                type="text"
                placeholder=" Search here"
                className="search-input"
                ref={inputRef} /> 
                <button className='search-btn' type="submit"><FaSearch /></button>
                
            </div>
            </div>
            <hr/>
        </header>
        
    )
}
export default Header;
