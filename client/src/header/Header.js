import React, { useState } from 'react';
import { 
  Button,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faListNumeric, faPerson, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function App() {
  const [valores, setarValores] = useState();

  const CarregaValores = valor =>{
      setarValores(preValor =>({
      ...preValor,
      [valor.target.name] : valor.target.value,
      
      }))
      console.log(valor.target.value);
  }

  const cliqueBotao = () =>{
    console.log(valores);
  }

  return (
    <div className="App">
      <Navbar color="primary" dark expand="md">
        <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Sistema de Gerenciamento</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>-Cadastro de Funcionários</NavLink>
            </NavItem>
        </Nav>
      </Navbar>

        <div className='container'>
          <div className='container-form'>


              <FontAwesomeIcon icon={ faUser } className='icone'> </FontAwesomeIcon>
              <Input 
              type='text' 
              name='nome' 
              placeholder='digite seu nome' onChange={CarregaValores}></Input> <br className='break_line'/>

              <FontAwesomeIcon icon={ faEnvelope }  className='icone'> </FontAwesomeIcon>
              <Input 
              type='email' 
              name='email' 
              placeholder='digite seu email' onChange={CarregaValores}></Input> <br className='break_line'/>

              <FontAwesomeIcon icon={ faPhone } className='icone'> </FontAwesomeIcon>
              <Input 
              type='text' 
              name='telefone' 
              placeholder='digite seu telefone' onChange={CarregaValores}></Input> <br className='break_line'/>

              <FontAwesomeIcon icon={ faPerson } className='icone'> </FontAwesomeIcon>
              <Input 
              type='text' 
              name='cpf' 
              placeholder='digite seu cpf' onChange={CarregaValores}></Input> <br className='break_line'/>

              <FontAwesomeIcon icon={ faListNumeric } className='icone'> </FontAwesomeIcon>
           
              <Input type="select" name="cargo" id="exampleSelect" onChange={CarregaValores}>
                <option value='Desenvolvedor'>Desenvolvedor</option>
                <option value='Suporte em Redes'>Suporte em Redes</option>
                <option value='Gerente'>Gerente</option>
                <option value='Financeiro'>Financeiro</option>
                <option value='Marketing'>Marketing</option>
              </Input><br className='break_line'/>

              <Button type='button' name='botao' onClick={() => cliqueBotao()} color="success">
                <FontAwesomeIcon icon={ faPaperPlane } className='icone'> </FontAwesomeIcon>
                  &nbsp;&nbsp;&nbsp;Cadastrar Informações
              </Button>

              
          </div>
        </div>
    </div>
  );
}

export default App;
