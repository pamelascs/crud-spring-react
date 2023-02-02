import React from "react";
import Cabecalho from "../../components/Cabecalho";
import OverviewBody from "../../components/OverviewBody";
import './overview.css';

function Overview({teste, titulo}) {
    return(
        <div >
            <h3>{titulo}</h3>
            <Cabecalho />
            <OverviewBody />
        </div>
    )

}

export default Overview;