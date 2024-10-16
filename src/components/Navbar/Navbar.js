import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navlist from "./NavList/Navlist";
import Navsublist from "./Navsublist/Navsublist";
import "./Navbar.css"


function Navbar() {
    const [click,setClick] = useState(false)
    const [selectedButton , setSelectedButton] = useState("women")

    const handleClick = () => {
        setClick( (prevState) => !prevState )
    }

    const handleButtonChange = (buttonName) => {
        setSelectedButton(buttonName)
    }
    return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='navbar-container container-fluid'>
            <div  className="navbar-logo navbar-brand">
                UOM <i class="fa-solid fa-circle"></i>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-grip-lines-vertical' : 'fa-solid fa-grip-lines'}/>
            </div>
        </div>
    </nav>
        <Navlist selectedButton={selectedButton} onButtonChange={handleButtonChange} click={click}/>
        <img src="" alt=""/>
        <Navsublist selectedButton={selectedButton} isActive={click} />
    </>
    )
}

export default Navbar;