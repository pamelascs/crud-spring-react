import React, {useEffect, useState} from 'react';

import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';




function App(){
  

    // Objeto projeto
    const projeto = {
      dadosBasicos :0,
      beneficios : '',
      justificativa : ''
    }
  
    // UseState
    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [projetos, setProjetos] = useState([]);
    const [objProjeto, setObjProjeto] = useState(projeto);

    // UseEffect
    useEffect(()=>{
      fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProjetos(retorno_convertido));
    }, []);


    // Obtendo dados do formulario

    const aoDigitar = (e) => {
      setObjProjeto({...objProjeto, [e.target.name]:e.target.value});
    }


    // cadastrar projeto
    const cadastrar = () => {
      fetch('http://localhost:8080/cadastrar', {
        method:'post',
        body:JSON.stringify(objProjeto),
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
          setProjetos([...projetos, retorno_convertido]);
          alert('Produto cadastrado com sucesso');
          limparFormulario();
        }
      })
    }

    // editar projeto
    const editar = () => {
      fetch('http://localhost:8080/editar', {
        method:'put',
        body:JSON.stringify(objProjeto),
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
        let vetorTemp = [...projetos];

        // Indice 
        let indice = vetorTemp.findIndex((p) =>{
          return p.codigo === objProjeto.codigo;
        });

        // Editar produto do vetor Temp
        vetorTemp[indice] = objProjeto;

        // Atalizar o vetor de produtos
        setProjetos(vetorTemp);

        // Limpar formulario
          limparFormulario();
        }
      })
    }

    // Remover projeto
    const remover = () => {
      fetch('http://localhost:8080/remover/'+objProjeto.codigo, {
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
        let vetorTemp = [...projetos];

        // Indice 
        let indice = vetorTemp.findIndex((p) =>{
          return p.codigo === objProjeto.codigo;
        });

        // Remover produto do vetor Temp
        vetorTemp.splice(indice, 1);

        // Atalizar o vetor de produtos
        setProjetos(vetorTemp);

        //Limpar formulario
        limparFormulario();
        
      })
    }

    // Limpar formulario 
    const limparFormulario = () => {
      setObjProjeto(projeto);
      setBtnCadastrar(true);
    }



    // Selecionar produto
    const selecionarProjeto = (indice) => {
      setObjProjeto(projetos[indice]);
      setBtnCadastrar(false);
    }
     


    //retorno
    return (
      <div>
        <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProjeto} cancelar={limparFormulario} remover={remover} editar={editar} />
        <Tabela vetor={projetos} selecionar={selecionarProjeto} />
      </div>
      
     
    );
  
}

export default App;
