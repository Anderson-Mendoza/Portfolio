import React from "react";
import ImageCss from "../assets/css-logo.png";
import ImageReact from "../assets/react-logo.png";
import ImageJs from "../assets/javascript-logo-svg-vector.svg";
import ImageHtml from "../assets/html-logo.png";
import { FaPaperclip } from "react-icons/fa";



export default function Tech() {

    return (
        <div >
            <div className="container" style={{
                paddingRight: "50px",
                paddingBottom: "20px"
            }}  >
                <FaPaperclip
                    style={{
                        width: "30px",
                        height: "30px",
                        marginTop: "10px",
                        marginRight: "10px"
                    }}
                />

                <h2>Tecnologias</h2>
            </div>

            <div className="image-tech">
                <img src={ImageCss} alt="logo css" />
                <img src={ImageHtml} alt="logo HTML" />
                <img src={ImageJs} alt="logo Javascript" />
                <img src={ImageReact} alt="logo React" />
            </div>

        </div>
    );
}