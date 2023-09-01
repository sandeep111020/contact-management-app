import React from "react";
import {Link, Outlet} from 'react-router-dom';


const NavBar = ()=>{
    return(
        <>
        <nav>
            <ul>
                <Link to='/'>
                    <li>Contacts</li>
                </Link>
                <Link to='/newContact'>
                <li>NewContact</li>
                </Link>
                <Link to='/editContact'>
                <li>EditContact</li>
                </Link>
                <Link to='/mapsAndGraphs'>
                <li>Maps and Graphs</li>
                </Link>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}
export default NavBar;