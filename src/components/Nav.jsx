import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (

        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <FontAwesomeIcon icon={faMapMarker} />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={setActiveClass} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={setActiveClass} to="/pokemon">Pokemón</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
