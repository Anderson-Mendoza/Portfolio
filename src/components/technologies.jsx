import React from "react";
import ImageCss from "../assets/css-logo.png";
import ImageReact from "../assets/react-logo.png";
import ImageJs from "../assets/javascript-logo-svg-vector.svg";
import ImageHtml from "../assets/html-logo.png";



export default function Tech() {

    return (
        <div className="container-tech" >
            <h2 className="title-tech">Tecnologias</h2>
            <div className="container-image-tech" >
                <button className="container-image-tech-button">
                    <img className="image-tech" src={ImageCss} alt="logo css" />
                </button>

                <button className="container-image-tech-button">
                    <img className="image-tech" src={ImageHtml} alt="logo HTML" />
                </button>

                <button className="container-image-tech-button">
                    <img className="image-tech" src={ImageJs} alt="logo Javascript" />
                </button>

                <button className="container-image-tech-button">
                    <img className="image-tech" src={ImageReact} alt="logo React" />
                </button>

            </div>

        </div>
    );
}