import ProductContainer from "../ProductContainer/ProductContainer";
import React from "react";

export default function TopCollection(){
    return (
        <ProductContainer heading={"Our Top Collection"} isGray={false}>
            <ul className={'  nav nav-menu active px-2 '}>
                <li className="nav-item mx-3">
                    <button
                        className={'nav-links btn btn-light'}
                    >
                    All
                    </button>
                </li><li className="nav-item mx-3">
                    <button
                        className={'nav-links btn btn-light'}
                    >
                        Featured

                    </button>
                </li><li className="nav-item mx-3">
                    <button
                        className={'nav-links btn btn-light'}
                    >
                        Sale
                    </button>
                </li><li className="nav-item mx-3">
                    <button
                        className={'nav-links btn btn-light'}
                    >
                    Best Selling
                    </button>
                </li><li className="nav-item mx-3">
                    <button
                        className={'nav-links btn btn-light'}
                    >
                    Top Rate
                    </button>
                </li>
            </ul>
        </ProductContainer>
    )
}