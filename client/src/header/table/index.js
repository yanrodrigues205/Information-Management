import React from 'react';
import './index.css';
import Modal from '../modal/index'; //IMPORTANDO MODAL QUE DARA A OPÇÃO DE EDITAR E EXCLUIR AO USUÁRIO

export default function Td(props) {//PEGANDO O VALOR VALUES DÁ PÁGINA HEADER.JS
      const [open, setOpen] = React.useState(false);
    return (
                <>
              
                <tr>
                <th>{props.id_td}</th>
                <td>{props.nome_td}</td>
                <td>{props.cargo_td}</td>
                <Modal open={open} setOpen={setOpen} className='botao'
                //PASSANDO TODOS OS VALORES, ARRAYS E PARAMETROS PARA O MODAL DE EDITAR E EXCLUIR
                //O NOME DAS VAARIAVEIS SAO COMO TD POIS PERTENCE A CADA LINHA DE REGISTRO DO SISTEMA
                lista_func={props.lista_func}
                setar_func={props.setar_func}
                key={props.id_td}
                id_td={props.id_td}
                nome_td={props.nome_td}
                cargo_td={props.cargo_td}
                data_td={props.data_td}
                fone_td={props.fone_td}
                email_td={props.email_td}
                cpf_td={props.cpf_td}

                
                ></Modal>
                </tr>
                </>
        
    );
 }

