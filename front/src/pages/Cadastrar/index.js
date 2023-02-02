import React, {useEffect, useState} from 'react';

import Cabecalho from '../../components/Cabecalho';
import FormularioCadastro from '../../components/FormularioCadastro';

import Tabela from '../../Tabela';



function Cadastrar(){
  

    // Objeto usuario
    const usuario = {
      nome :0,
      dataNasc : '',
      telefone : '',
      cpf : '',
      endereco : '',
      email : '',
      setor : '',
      nomeLogin : '',
      senha : '',
      tipoPerfil : ''

    }
  
    // UseState
    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [usuarios, setUsuario] = useState([]);
    const [objUsuario, setObjUsuario] = useState(usuario);

    // UseEffect
    useEffect(()=>{
      fetch("http://localhost:8080/listarUsuario")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setUsuario(retorno_convertido));
    }, []);


    // Obtendo dados do formulario

    const aoDigitar = (e) => {
      setObjUsuario({...objUsuario, [e.target.name]:e.target.value});
    }


    // cadastrar projeto
    const cadastrar = () => {
      fetch('http://localhost:8080/cadastrarUsuario', {
        method:'post',
        body:JSON.stringify(objUsuario),
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        
        if(retorno_convertido.mensagem !==undefined){
          alert(retorno_convertido.mensagem);
        }else{
          setUsuario([...usuarios, retorno_convertido]);
          alert('Usuário cadastrado com sucesso');
          limparFormulario();
        }
      })
    }

    // editar projeto
    const editar = () => {
      fetch('http://localhost:8080/editarUsuario', {
        method:'put',
        body:JSON.stringify(objUsuario),
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        
        if(retorno_convertido.mensagem !==undefined){
          alert(retorno_convertido.mensagem);
        }else{
          // Mensagem
          alert('Produto alterado com sucesso');

          // Copia do vetor dos produtos
        let vetorTemp = [...usuarios];

        // Indice 
        let indice = vetorTemp.findIndex((p) =>{
          return p.idUsuario === objUsuario.idUsuario;
        });

        // Editar produto do vetor Temp
        vetorTemp[indice] = objUsuario;

        // Atalizar o vetor de produtos
        setUsuario(vetorTemp);

        // Limpar formulario
        limparFormulario();
        }
      })
    }

    // Remover projeto
    const remover = () => {
      fetch('http://localhost:8080/removerUsuario/'+objUsuario.idUsuario, {
        method:'delete',
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        
        // Mensagem 
        alert(retorno_convertido.mensagem);

        // Copia do vetor dos produtos
        let vetorTemp = [...usuarios];

        // Indice 
        let indice = vetorTemp.findIndex((p) =>{
          return p.idUsuario === objUsuario.idUsuario;
        });

        // Remover produto do vetor Temp
        vetorTemp.splice(indice, 1);

        // Atalizar o vetor de produtos
        setUsuario(vetorTemp);

        //Limpar formulario
        limparFormulario();
        
      })
    }

    // Limpar formulario 
    const limparFormulario = () => {
      setObjUsuario(usuario);
      setBtnCadastrar(true);
    }



    // Selecionar produto
    const selecionarUsuario = (indice) => {
      setObjUsuario(usuarios[indice]);
      setBtnCadastrar(false);
    }
     


    //retorno
    return (
      <div>
        <Cabecalho />
        <FormularioCadastro botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objUsuario} cancelar={limparFormulario} remover={remover} editar={editar} />
        <Tabela vetor={usuarios} selecionar={selecionarUsuario} />
      </div>
      
     
    );
  
}

export default Cadastrar;
