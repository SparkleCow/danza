import React from "react";
import "../css/generalContainer.css"

function GeneralContainer(props){
    return(
        <div className="general_container">
            {props.children}
        </div>
    );
}

export default GeneralContainer;