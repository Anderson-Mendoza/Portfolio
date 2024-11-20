import React from "react";
import Image from "../assets/images.jpeg";
// import { loremIpsum } from "react-lorem-ipsum";


function Hero() {

    const handleClick = function () {
        window.open('https://www.google.com/', '_blank')
    }

    return (
        <div className="container">
            <div className="profile-btn-available">
                <img className="image"
                    src={Image}
                    alt="foto de Sheshomaru"
                ></img>
                <button className="btn">
                    <span> Disponible para trabajar </span>
                </button>
            </div>

            <div className="text">
                <h2 >¡Hola, Soy Anderson Mendoza!</h2>
                <p >Soy desarrollador de software en proceso de aprendizaje
                    y me enfoco especialmente en el area de front-end developer
                </p>
                {/* <p > {loremIpsum({ p: 1 })} </p> */}
            </div>

            <button type="button" onClick={handleClick} className="btn">
                <span> Contactame </span>
            </button>
        </div>
    )
}

export default Hero