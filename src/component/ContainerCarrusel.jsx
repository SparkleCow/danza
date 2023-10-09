import React from "react";
import "../css/carrusel.css"

function ContainerCarrusel(props){
    return(
        <div className="container_carrusel">
            {props.children}
        </div>
    );
}

export default ContainerCarrusel;