import React from "react";
function Tabela({vetor, selecionar}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.dados_basicos}</td>
                            <td>{obj.beneficios}</td>
                            <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;