import React from 'react';
import './cabecalho.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Cabecalho() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark'>
      <a className='navbar-brand' href='#' style={{color: 'white', marginLeft:40}}>Home</a>
    </nav>

  );
}

export default Cabecalho;