import React from "react";
import "../Navbar.css";

export default function Navsublist({selectedButton , isActive}) {
    let menuList = [];
    if (selectedButton === "women"){
       menuList =   [
            "Accessories",
            "Women",
            "Kids",
            "Home",
            "Collection",
            "Sale up to 50% Off",
            "Jeans",
            "Dresses",
            "Shoes",
            "Join Life"
        ]
    }
    else if (selectedButton === "men"){
        menuList =   [
            "Accessories",
            "Join Life",
            "T-Shirts & Tops",
            "Gift Card",
            "Jackets & Coats",
            "Best Sellers",
            "Collection",
            "Sale up to 50% Off",
            "#UomoStyle"
        ]
    }
    else{
        menuList =   [
            "Man",
            "Women",
            "Collection",
            "Sale up to 50% Off",
            "Accessories",
            "Join Life",
            "T-Shirts & Tops",
            "Jeans",
            "Best Sellers",
            "Dresses"
        ]
    }
    return (
        // {isActive : (  ) }
        <>
            {isActive ? (
                <ul className={'nav-menu active'}>
                    {menuList.map((items , itemKey) => (
                        <li className="dropdown-item" key={itemKey}> {items}</li>
                    ))}
                </ul>
            ) : null}
        </>
    )

}