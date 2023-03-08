import React, { useState } from 'react';
import Axios from 'axios';
import { 
  Button,
  Navbar,
  Container,
  Col,
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
      [valor.target.name] : valor.target.value, //setando os valores e mandando para um array no react 
      
      }))
      console.log(valor.target.value);
  }

    const cliqueBotao = () =>{
      Axios.post('http://localhost:3001/cadastro',{ 
      //MANDANDO DADOS POR POST EM FORMATO DE ARRAY,API PARA O BACK END, QUE ESTA NA PORTA
      //  3001/CADASTRO, O FRONT ESTÁ NA 3000;
      nome: valores.nome,
      email: valores.email,
      fone: valores.telefone,
      cpf: valores.cpf,
      cargo: valores.cargo
    }).then((response)=>{
      console.log(response);
    });
    };

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

    <Container>
      <br/><br/>
        <Col xs="6">
            <FontAwesomeIcon icon={ faUser } className='icone'> </FontAwesomeIcon>
              <Input 
              type='text' 
              name='nome' minLength={10} maxLength={100}
              placeholder='digite seu nome' pathern='[A-Za-z].{10, }' onChange={CarregaValores} ></Input> 

              <FontAwesomeIcon icon={ faEnvelope }  className='icone'> </FontAwesomeIcon>
              <Input 
              type='email' 
              name='email' 
              placeholder='digite seu email' onChange={CarregaValores}></Input> 

              <FontAwesomeIcon icon={ faPhone } className='icone'> </FontAwesomeIcon>
              <Input 
              type='text' 
              name='telefone' 
              placeholder='digite seu telefone' minLength={10} maxLength={16} onChange={CarregaValores}></Input> 

              <FontAwesomeIcon icon={ faPerson } className='icone'> </FontAwesomeIcon>
              <Input 
              type='text' 
              name='cpf' 
              placeholder='digite seu cpf' minLength={13} maxLength={15} onChange={CarregaValores}></Input> 

              <FontAwesomeIcon icon={ faListNumeric } className='icone'> </FontAwesomeIcon>
           
              <Input type="select" name="cargo" id="exampleSelect" onChange={CarregaValores}>
                <option value='Desenvolvedor'>Desenvolvedor</option>
                <option value='Suporte em Redes'>Suporte em Redes</option>
                <option value='Gerente'>Gerente</option>
                <option value='Financeiro'>Financeiro</option>
                <option value='Marketing'>Marketing</option>
              </Input><br className='break_line'/>

              <Button type='button' name='botao' onClick={() => cliqueBotao()} color="success">
                <FontAwesomeIcon icon={ faPaperPlane } className='icone_bt'> </FontAwesomeIcon>
                  &nbsp;&nbsp;&nbsp;Cadastrar Informações
              </Button>
          </Col>
          <Col  xs="6">
              .col-6
          </Col>
    </Container>
        
    </div>
  );
}

export default App;
