import React from "react";
import ImageCss from "../assets/css-logo.png";
import ImageReact from "../assets/react-logo.png";
import ImageJs from "../assets/javascript-logo-svg-vector.svg";
import ImageHtml from "../assets/html-logo.png";



export default function Tech() {

    return (

        <div className="container">
            <h2 className="text title">Tecnologias</h2>
            <div className="image-tech">
                <img src={ImageCss} alt="logo css" />
                <img src={ImageHtml} alt="logo HTML" />
                <img src={ImageJs} alt="logo Javascript" />
                <img src={ImageReact} alt="logo React" />
            </div>
        </div>
    );
}