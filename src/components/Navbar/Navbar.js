import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navlist from "./NavList/Navlist";
import Navsublist from "./Navsublist/Navsublist";


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
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/public" className="navbar-logo">
                UOM <i class="fa-solid fa-circle"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <Navlist onButtonChange={handleButtonChange} click={click}/>
            <img src="" alt=""/>
            <Navsublist selectedButton={selectedButton} isActive={click} />
        </div>
    </nav>
    </>
    )
}

export default Navbar;