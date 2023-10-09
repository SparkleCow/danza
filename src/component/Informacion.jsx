import React from "react";
import "../css/informacion.css";

function Informacion(props){
    return(
        <div className="informacion">
            <div className="contenedor_informacion">
                <h2 className="titulo_clase_informacion">{props.title}</h2>
                <p className="descripcion_informacion">{props.text}</p>
            </div>
            <img className="imagen_informacion" src={require(`../imagenes/${props.imagen}`)} alt="Imagen de danza"/>
        </div>
    );
}
export default Informacion;