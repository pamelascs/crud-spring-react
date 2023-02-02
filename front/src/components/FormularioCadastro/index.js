import React from "react";
import './formularioCadastro.css';
function FormularioCadastro({botao, eventoTeclado, cadastrar, obj, cancelar, remover, editar}){
    return(
        <form className="form">
                
                <label for="exampleFormControlInput1" class="form-label">Nome*</label>
                <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' placeholder="Nome completo...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">Data de nascimento*</label>
                <input type='text' value={obj.dataNasc} onChange={eventoTeclado} name='dataNasc' placeholder="Data de nascimento...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">Telefone*</label>
                <input type='text' value={obj.telefone} onChange={eventoTeclado} name='telefone' placeholder="Telefone...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">CPF*</label>
                <input type='text' value={obj.cpf} onChange={eventoTeclado} name='cpf' placeholder="CPF...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">Endereço*</label>
                <input type='text' value={obj.endereco} onChange={eventoTeclado} name='endereco' placeholder="Endereço...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">E-mail*</label>
                <input type='text' value={obj.email} onChange={eventoTeclado} name='email' placeholder="E-mail...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">Seror em que trabalha*</label>
                <input type='text' value={obj.setor} onChange={eventoTeclado} name='setor' placeholder="Setor em que trabalha...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">Nome de usuario*</label>
                <input type='text' value={obj.nomeLogin} onChange={eventoTeclado} name='nomeLogin' placeholder="Nome de usuário...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">Senha*</label>
                <input type='text' value={obj.senha} onChange={eventoTeclado} name='senha' placeholder="Senha...|" className="form-control"/>
                
                <label for="exampleFormControlInput1" class="form-label">Tipo de perfil*</label>
                <input type='text' value={obj.tipoPerfil} onChange={eventoTeclado} name='tipoPerfil' placeholder="Tipo de perfil...|" className="form-control"/>

            { 
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary" style={{marginTop:15}}/>
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


export default FormularioCadastro;