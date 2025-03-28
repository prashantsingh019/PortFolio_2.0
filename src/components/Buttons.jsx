import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"
function Buttons({url,icon}){
    return(
        <button className="btn-social">
           <a href={url}> <FontAwesomeIcon icon={icon} className="icon"/></a>
        </button>
    )
}

export default Buttons;