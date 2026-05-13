import { NavLink, useLocation, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";
import './header.css'
// import './mobHeader.css'
// import './tabHeader.css'
import '../../assets/index.css'
import '../../assets/styles/buttons/button.css'

function Header() {
    const [open, setOpen] = useState(false);
    const closeMenu = () => setOpen(false);
    const location = useLocation();
    const navigation = useNavigation();
    const isNavigating = navigation.state === "loading";


    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <>
            <div className="header">
                <div className="head-logo">
                    <img src="/Group.png" className="groupLogo"></img>
                    <div className="head-text">Healthy Recipe Finder</div>
                </div>

                <div className="header-menu">

                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `menu-link ${isActive ? "active" : ""} ${isNavigating ? "disabled" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                end
                                className={({ isActive }) =>
                                    `menu-link ${isActive ? "active" : ""} ${isNavigating ? "disabled" : ""}`
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/recipes"
                                end
                               className={({ isActive }) =>
                                    `menu-link ${isActive ? "active" : ""} ${isNavigating ? "disabled" : ""}`
                                }
                            >
                                Recipes
                            </NavLink>
                        </li>


                    </ul>
                </div>


                <div className="mobMenu">
                    <button className="dropbtn" disabled={isNavigating} onClick={() => setOpen(!open)}>
                        <img src="/hambMenu.png" alt="menu" className="hambMenu" />
                    </button>

                    {open && (
                       <div className="dropdown">
                            <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        end
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `menu-link ${isActive ? "active" : ""} ${isNavigating ? "disabled" : ""}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/about"
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `menu-link ${isActive ? "active" : ""} ${isNavigating ? "disabled" : ""}`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/recipes"
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `menu-link ${isActive ? "active" : ""} ${isNavigating ? "disabled" : ""}`
                                        }
                                    >
                                        Recipes
                                    </NavLink>
                                </li>                              
                              

                                      <NavLink
                                        to="/recipes"
                                        end
                                        onClick={closeMenu}
                                        className={'button button--primary'}
                                    >
                                        Browse recipes
                                    </NavLink>                                
                                                                  

                            </ul>

                        </div>
                    )}

                </div>


                <NavLink
                    to="/recipes"
                    end
                    onClick={closeMenu}
                    className={'button button--primary'}
                >
                    Browse recipes
                </NavLink>
                {isNavigating && <div className="header-progress" />}

            </div>
        </>
    )

}

export default Header