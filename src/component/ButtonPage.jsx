import React from "react";
import "../css/botones.css";

function ButtonPage(props){
    const handleClick = () => {
        props.actualizarInformacion(props.data);
        console.log("Hola");
    };
    return(
        <div className="boton" onClick={handleClick}>
            <img className="imagen_boton" src={require(`../imagenes/${props.imagen}`)} alt="Imagen de danza"/>
            <div className="contenedor_informacion_boton">
                <h2 className="titulo_clase">{props.title}</h2>
                <p className="descripcion">{props.text}</p>
            </div>
        </div>
    );
}
export default ButtonPage;