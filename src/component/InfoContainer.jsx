import React from "react";
import "../css/InfoContainer.css"

function InfoContainer(props){
    return(
        <div className="info_container">
            {props.children}
        </div>
    );
}

export default InfoContainer;