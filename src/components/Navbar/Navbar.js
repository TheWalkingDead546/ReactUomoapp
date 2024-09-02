import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click,setClick] = useState(false)

    const handleClick = () => {
        setClick( (prevState) => !prevState )
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
            {click ? (
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/public' className='nav-links' onClick={handleClick}>
                            Women
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/public' className='nav-links' onClick={handleClick}>
                            Men
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/public' className='nav-links' onClick={handleClick}>
                            Kids
                        </Link>
                    </li>
                </ul>
            ) : null}
        </div>
    </nav>
    </>
  )
}

export default Navbar;