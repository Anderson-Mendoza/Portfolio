import React from "react";
import { ImUserTie } from "react-icons/im";


export default function About() {
    return (
        <div className="container">
            <ImUserTie
                style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "10px",
                    marginRight: "10px"
                }} />
            <h2>Sobre mi</h2>
            <p className="text">
                Me llamo Anderson Alexis Mendoza pero mis amigos me llaman Mendo. Empecé en la programación hace 3 años,
                aprendiendo mucho sobre HTML, CSS Y Javascript, actualmente me encuentro aprendiendo React para mis
                siguientes proyectos </p>
        </div>




    )
}

