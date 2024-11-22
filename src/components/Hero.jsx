import React from "react";
import Image from "../assets/images.jpeg";
import { TbMessage2Share } from "react-icons/tb";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { loremIpsum } from "react-lorem-ipsum";


function Hero() {

    const handleClickLinkedin = function () {
        window.open('https://www.linkedin.com/in/anderson-mendoza-dev', '_blank');
    };

    const handleClickGithub = function () {
        window.open('https://www.github.com/Anderson-Mendoza', '_blank');
    };

    const handleClickEmail = function () {
        window.open('https://mail.google.com/mail/u/1/#inbox', '_blank');
    }





    return (
        <div className="container">
            <div className="profile-btn-available">
                <img className="image"
                    src={Image}
                    alt="foto de Sheshomaru"
                ></img>
                <button type="button" onClick={handleClickLinkedin} className="btn">
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

            <button type="button" className="btn" onClick={handleClickEmail}>
                <span>
                    <TbMessage2Share
                        style={{
                            marginRight: "10px"
                        }} />
                    Contactame </span>
            </button>

            <button type="button" className="btn" style={{ marginLeft: "20px" }} onClick={handleClickLinkedin}>
                <span>
                    <FaLinkedin
                        style={{
                            marginRight: "10px"
                        }} />
                    Linkedin </span>
            </button>

            <button type="button" className="btn" style={{ marginLeft: "20px" }} onClick={handleClickGithub} >
                <span>
                    <FaGithub
                        style={{
                            marginRight: "10px"
                        }} />
                    Github </span>
            </button>
        </div>
    )
}

export default Hero