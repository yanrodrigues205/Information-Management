import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faListNumeric, faPerson, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [valores, setarValores] = useState();

  const CarregaValores = valor =>{
      setarValores(preValor =>({
      ...preValor,
      [valor.target.nome] : valor.target.value,
      
      }))
      console.log(valor.target.value);
  }

  return (
    <div className="App">
        <div className='container'>
          <div className='container-form'>


              <FontAwesomeIcon icon={ faUser } className='icone'> </FontAwesomeIcon>
              <input 
              type='text' 
              name='nome' 
              placeholder='digite seu nome' onChange={CarregaValores}></input> <br className='break_line'/>

              <FontAwesomeIcon icon={ faEnvelope }  className='icone'> </FontAwesomeIcon>
              <input 
              type='email' 
              name='email' 
              placeholder='digite seu email'></input> <br className='break_line'/>

              <FontAwesomeIcon icon={ faPhone } className='icone'> </FontAwesomeIcon>
              <input 
              type='text' 
              name='telefone' 
              placeholder='digite seu telefone'></input> <br className='break_line'/>

              <FontAwesomeIcon icon={ faPerson } className='icone'> </FontAwesomeIcon>
              <input 
              type='text' 
              name='cpf' 
              placeholder='digite seu cpf'></input> <br className='break_line'/>

              <FontAwesomeIcon icon={ faListNumeric } className='icone'> </FontAwesomeIcon>
              <select name='cargo'>
                <option value='Desenvolvedor'>Desenvolvedor</option>
                <option value='Suporte em Redes'>Suporte em Redes</option>
                <option value='Gerente'>Gerente</option>
                <option value='Financeiro'>Financeiro</option>
                <option value='Marketing'>Marketing</option>
              </select> <br className='break_line'/>

              <button type='button' name='botao'>
              <FontAwesomeIcon icon={ faPaperPlane } className='icone'> </FontAwesomeIcon>  Enviar Informações
              </button>
          </div>
        </div>
    </div>
  );
}

export default App;
