import React from "react";
import './formularioLogin.css';
function FormularioLogin(){
    return(
        <form className="formulario">
                
                <label for="exampleFormControlInput1" class="form-label">Usuario*</label>
                <input type='text' value={null} onChange={null} name='nomeLogin' placeholder="Nome de usuário...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">Senha*</label>
                <input type='text' value={null} onChange={null} name='senha' placeholder="Senha...|" className="form-control"/>
                
            
                
                <input type='button' value='Entrar' onClick={null} className="btn btn-primary" style={{marginTop:15}}/>
                


        </form>
    )
}


export default FormularioLogin;