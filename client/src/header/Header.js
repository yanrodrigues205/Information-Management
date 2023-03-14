import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { 
  Button,
  Navbar,
  Container,
  Col,
  Nav,
  NavItem,
  NavLink,
  Table,
  Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faListNumeric, faPerson, faPaperPlane, faEye} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Td from './table';
import { Notify } from 'notiflix';

function App() {
  const [valores, setarValores] = useState();
  const [listaFuncionarios, setarFunc] = useState();
  // console.log(setarFunc);
  const CarregaValores = valor =>{
      setarValores(preValor =>({
      ...preValor,
      [valor.target.name] : valor.target.value, //setando os valores e mandando para um array no react 
      
      }))
      // console.log(valor.target.value);
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
    Notify.success("Funcionário cadastrado com sucesso, recarregando a página!", {
      position: 'right-bottom',
      className: '	notiflix-loading'
    });
    const funcao = () => {
      window.location.reload()
    }
    setTimeout(funcao, 3500);
    };

    useEffect(()=>{
      Axios.get("http://localhost:3001/registros").then((response) =>{
        setarFunc(response.data);
        console.log(response.data)
      })
    }, []);   //USANDO EFEITO PARA PEGAR POR GET OS VALORES DO BACK END Q IRÃO RETORNAR OS REGISTROS DO BANCO


  return (
    <div className="App">
   
      <Navbar color="primary" dark expand="md">
        <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Sistema de Gerenciamento</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>- Funcionários</NavLink>
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
              placeholder='Digite seu Nome' pathern='[A-Za-z].{10, }' onChange={CarregaValores} ></Input> 

              <FontAwesomeIcon icon={ faEnvelope }  className='icone'> </FontAwesomeIcon>
              <Input 
              type='email' 
              name='email' 
              placeholder='Digite seu Email' onChange={CarregaValores}></Input> 

              <FontAwesomeIcon icon={ faPhone } className='icone'> </FontAwesomeIcon>
              <Input 
              type='text' 
              name='telefone' 
              placeholder='Digite seu Telefone' minLength={10} maxLength={16} onChange={CarregaValores}></Input> 

              <FontAwesomeIcon icon={ faPerson } className='icone'> </FontAwesomeIcon>
              <Input 
              type='text' 
              name='cpf' 
              placeholder='Digite seu CPF' minLength={13} maxLength={15} onChange={CarregaValores}></Input> 

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
                  &nbsp;&nbsp;&nbsp;Contratar Funcionário
              </Button>
          </Col>
          <Col  xs="6">
          <Table>
          <thead>
            <tr>
            <th>ID</th>
            <th>Nome do Funcionário</th>
            <th>Cargo</th>
            <th>Informações
            </th>
          </tr>
        </thead>
        <tbody>
        
         
            {
              typeof listaFuncionarios !== "undefined" && listaFuncionarios.map((value) => {
                console.log(value.nome_fun)
                return (
                  <Td key={value.id_fun}
                      lista_func={listaFuncionarios}
                      setar_func={setarFunc}
                      id_td={value.id_fun}
                      nome_td={value.nome_fun} //MANDANDO INFORMAÇÕES PARA A TABLE QUE ESTÁ EM : ./table/index.js
                      cpf_td={value.cpf_fun}
                      cargo_td={value.cargo_fun}
                      fone_td={value.fone_fun}
                      email_td={value.email_fun}
                      data_td={value.data_insert_fun}

                      //os nomes das variaveis estao como td pois em conjunto elas representam uma linha de registro da tabela
                  ></Td>
                );
               
              }) 
            }
      
       </tbody>
          </Table> 
         
          </Col>
    </Container>
        
    </div>
  );
}

export default App;
