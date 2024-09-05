import React, {useState} from "react";

export default function Navlist( {onButtonChange , click, selectedButton} ){


    function handleClick(button){
        onButtonChange(button);
    }

    return (
        <>
            {click ? (
                <div className="container-fluid">
                <ul className={click ? 'nav nav-menu active' : 'nav nav-menu'}>
                    <li className="nav-item">
                        <button className={selectedButton === "women" ? 'nav-links btn btn-dark' : 'nav-links btn btn-light'} onClick={ () => handleClick("women")}  type="button">
                            Women
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button className={selectedButton === "men" ? "nav-links btn btn-dark" : 'nav-links btn btn-light'} onClick={ () => handleClick("men")} type="button">
                            Men
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button className={selectedButton === "kids" ? "nav-links btn btn-dark" : 'nav-links btn btn-light'} onClick={ () => handleClick("kids")} type="button">
                            Kids
                        </button>
                    </li>
                </ul>
                </div>
            ) : null}
        </>
    )
}