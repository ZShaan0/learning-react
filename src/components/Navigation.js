import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition,animated } from "react-spring";
import {Link} from "react-router-dom";


function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0 , transform: 'translateX(-100%)'},
    });

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                    />
            </span>

            {maskTransitions((styles, item) =>
                item && (
                    <animated.div
                        style={styles}
                        className="bg-black/50 fixed top-0 left-0 w-full h-full z-40"
                        onClick={() => setShowMenu(false)}
                    />
                )
            )}

            {menuTransitions((styles, item) =>
                item && (
                    <animated.div
                        style={styles}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
                    >
                        <span className='font-bold'>
                        First Menu
                        </span>
                        <ul>
                            <li>
                                <Link to="/"
                                className='text-blue-500'
                                onClick={() => setShowMenu(false)}
                                >Home</Link>
                            </li>
                            <li>
                                <Link to="/about-us"
                                className='text-blue-500'
                                onClick={() => setShowMenu(false)}
                                >About Us</Link>
                            </li>
                        </ul>
                    </animated.div>
                )
            )}
        </nav>
    )
}

export default Navigation 