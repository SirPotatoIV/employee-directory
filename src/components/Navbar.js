import React from 'react';
import Button from "./Button.js"
import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo bold">Employee Directory</div>
            <div className="descriptor">
                <div className="bold">Sort Options: </div>
                <Button>Name</Button>
                <Button>UID</Button>
                <Button>Age</Button>
            </div>
            <div className="descriptor">
                <div className="bold">Filter Options: </div>
                <Button>Filter Off</Button>
                <Button>Gender</Button>
            </div>
        </div>
    )
}
export default Navbar;