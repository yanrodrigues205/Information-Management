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
                <Modal open={open} setOpen={setOpen} className='botao'></Modal>
                </tr>
                </>
        
    );
 }

