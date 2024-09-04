import React, {useState} from "react";

export default function Navlist( {onButtonChange , click} ){


    function handleClick(button){
        onButtonChange(button);
    }

    return (
        <>
            {click ? (
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' onClick={ () => handleClick("women")}>
                        <button className="nav-links">
                            Women
                        </button>
                    </li>
                    <li className='nav-item' onClick={ () => handleClick("men")}>
                        <button className="nav-links">
                            Men
                        </button>
                    </li>
                    <li className='nav-item' onClick={ () => handleClick("kids")}>
                        <button className="nav-links">
                            Kids
                        </button>
                    </li>
                </ul>
            ) : null}
        </>
    )
}