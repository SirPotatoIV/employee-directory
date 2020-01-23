import React from 'react';
import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo bold">Employee Directory</div>
            <div className="filter">
                <div className="bold">Filter Options: </div>
                <div>Name</div>
                <div></div>
            </div>
        </div>
    )
}
export default Navbar;