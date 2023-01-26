import React from "react";

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, editar}){
    return(
        <form>
            <input type='text' value={obj.dadosBasicos} onChange={eventoTeclado} name='dados' placeholder="Nome" className="form-control"/>
            <input type='text' value={obj.beneficios} onChange={eventoTeclado} name='beneficios' placeholder="Marca" className="form-control"/>


            { 
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary"/>
                :
                <div>
                    <input type='button' value='Alterar' onClick={editar} className="btn btn-primary"/>
                    <input type='button' value='Remover' onClick={remover} className="btn btn-primary"/>
                    <input type='button' value='Cancelar' onClick={cancelar} className="btn btn-primary"/>
                </div>
                
            }


        </form>
    )
}


export default Formulario;