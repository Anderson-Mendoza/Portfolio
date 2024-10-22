import React from "react";
import Image from "../assets/images.jpeg";
// import { loremIpsum } from "react-lorem-ipsum";


function Hero() {
    return (
        <div className="header">
            <div className="profile-btn-available">
                <img className="image"
                    src={Image}
                    alt="foto de Sheshomaru"
                ></img>
                <button className="btn">
                    <span> Disponible para trabajar </span>
                </button>
            </div>

            <div className="description-text">
                <h2 >!Hola, Soy Anderson Mendoza¡</h2><br />
                <p >Soy desarrollador de software en proceso de aprendizaje
                    y me enfoco especialmente en el area de front-end developer
                </p>
                {/* <p > {loremIpsum({ p: 1 })} </p> */}
            </div>

            <button className="btn">
                <span> Contactame </span>
            </button>
        </div>
    )
}

export default Hero