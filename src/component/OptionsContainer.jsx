import React from "react";
import "../css/OptionsContainer.css"

function OptionsContainer(props){
    return(
        <div className="options_container">
            {props.children}
        </div>
    );
}

export default OptionsContainer;