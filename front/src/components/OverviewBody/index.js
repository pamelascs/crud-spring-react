import React from "react";
import './overviewBody.css';
function OverviewBody({ id, titulo, capa }) {
    return (
        <div>
            
            <div className="container">
            <img src={capa} alt={titulo} className="capa" />
            <h2>{titulo}</h2>
            <img
                alt="Favoritar filme"
                className="favoritar" />
        </div>
        </div>
        
    )


}

export default OverviewBody;