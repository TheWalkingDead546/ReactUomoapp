import WomenImg from "./slider51.jpg"
import manImg from "./1.jpeg"
import {useState} from "react";

export default function Hero(){
    const [next ,setNext] = useState({
        img: WomenImg,
        heading: "Better Things In A Better Way"
    })

    function handleChange(){
        setNext( (prevState) => prevState.img ===  WomenImg ? {
            img: manImg,
            heading: "Discover The Latest Trends"
        } : {
            img: WomenImg,
            heading: "Better Things In A Better Way"
        })
    }

    return (
        <div className="position-relative text-center">
            <img src={next.img} className="img-fluid w-100" alt="Banner"/>

            {/* Centered Heading */}
            <h1 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
                {next.heading}
            </h1>

            {/* Navigation Links */}
            <div className="position-absolute top-50 mt-5 start-50 translate-middle text-white">
                <ul className="list-inline">
                    <li className="list-inline-item mx-3">
                        <a href="#" className="text-white text-decoration-none">
                            Shop Women
                        </a>
                    </li>
                    <li className="list-inline-item mx-3">
                        <a href="#" className="text-white text-decoration-none">
                            Shop Men
                        </a>
                    </li>
                </ul>
            </div>

            {/* Left Arrow */}
            <button
                onClick={handleChange}
                type="button"
                className="bg-transparent border-0 position-absolute top-50 start-0 translate-middle-y text-white"
            >
                <i className="bi bi-arrow-left-circle-fill fs-2"></i>
            </button>

            {/* Right Arrow */}
            <button
                onClick={handleChange}
                type="button"
                className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y text-white"
            >
                <i className="bi bi-arrow-right-circle-fill fs-2"></i>
            </button>
        </div>

    )
}