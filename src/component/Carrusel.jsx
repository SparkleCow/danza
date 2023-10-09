import React from "react";
import "../css/carrusel.css"

function Carrusel(props){
    return(
        <div className="carrusel_wrapper">
            <img className="imagen_carrusel" src={require(`../imagenes/${props.imagenCarrusel}`)} alt="Imagenes de danza"/>
            <div className="overlay_text">
                <p>{props.textCarrusel}</p>
            </div>
        </div>
    );
}

export default Carrusel;