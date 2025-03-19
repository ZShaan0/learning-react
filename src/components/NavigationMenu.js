import React from "react";
import {Link} from "react-router-dom";


function NavigationMenu(props){
    return (
        <div>
            <div className='font-bold py-3 border -b'>
                First Menu
                </div>
                <ul>
                    <li>
                        <Link to="/"
                        className='text-blue-500 py-3 border -b block'
                        onClick={props.closeMenu}
                        >Home</Link>
                    </li>
                    <li>
                        <Link to="/DandD"
                        className='text-blue-500 py-3 border -b block'
                        onClick={props.closeMenu}
                        >D&D Handbook</Link>
                    </li>
                    <li>
                        <Link to="/about-us"
                        className='text-blue-500 py-3 border -b block'
                        onClick={props.closeMenu}
                        >About Us</Link>
                    </li>
                </ul>
        </div>
    )
}

export default NavigationMenu