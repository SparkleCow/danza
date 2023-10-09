import React from "react";
import "../css/header.css";
import "../css/headerMediaQueries.css"

function Header(props){
    return(
        <header>
            <div className="primera_paleta">
                <img src={require(`../imagenes/${props.imagenPrimeraPaleta}`)} alt="Primera paleta de colores"/>
            </div>
            <div className="guia">
                <img src={require(`../imagenes/${props.imagenGuia}`)} alt="Icono de libro"/>
            </div>
            <div className="about">
                <img src={require(`../imagenes/${props.imagenAbout}`)} alt="Icono de pagina web"/>
            </div>
            <div className="title">
                <img src={require(`../imagenes/${props.imagenTitulo}`)} alt="Titulo de la pagina"/>
            </div>
            <div className="contact">
                <img src={require(`../imagenes/${props.imagenContact}`)} alt="Icono de contacto"/>
            </div>
            <div className="about_me">
                <img src={require(`../imagenes/${props.imagenAboutMe}`)} alt="Icono de persona"/>
            </div>
            <div className="segunda_paleta">
                <img src={require(`../imagenes/${props.imagenSegundaPaleta}`)} alt="Segunda paleta de colores"/>
            </div>
        </header>
    );
}

export default Header;