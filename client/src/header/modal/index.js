import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem } from "@material-ui/core";
import Axios from "axios";


export default function FormDialog(props) {

  const [ editar_valores, setar_valores] = useState({
    id_fun: props.id_td,
    nome_fun: props.nome_td,
    email_fun: props.email_td,
    cpf_fun: props.cpf_td,
    cargo_fun: props.cargo_td,
    fone_fun: props.nome_td
  });
 
  const editar_funcionarios = () => {
    Axios.put("http://locaalhost:3001/editar", {
      id_fun: props.id_td,
      nome_fun: props.nome_td,
      email_fun: props.email_td,
      cpf_fun: props.cpf_td,
      cargo_fun: props.cargo_td,
      fone_fun: props.fone_td
    })
  };
  const fechar_modal = () => {
    props.setOpen(false);
  };

  const clique_abrir_modal = () => {
    props.setOpen(true);
  };

  const carregar_valores = (valores) =>{
      setar_valores((preValores) => ({
        ...preValores,
        [valores.target.id] : valores.target.value,
        
      }))
  };


  return (
    <div>
      <button onClick={clique_abrir_modal} className='botao'> <FontAwesomeIcon icon={faEye}/>  </button>
      <Dialog
        open={props.open}
        onClose={fechar_modal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Informações do Funcionario</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome do Funcionario"
            defaultValue={props.nome_td}
            type="text"
            // onChange={handleChangeValues}
            fullWidth
          /> 
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email do Funcionario"
            defaultValue={props.email_td}
            type="email"
            // onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="telefone"
            label="Telefone do Funcionario"
            defaultValue={props.fone_td}
            type="text"
            // onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cpf"
            label="CPF do Funcionario"
            defaultValue={props.cpf_td}
            type="text"
            // onChange={handleChangeValues}
            fullWidth
          />

          <TextField
            select
            margin="dense"
            id="name"
            label="Cargo do Funcionario"
            defaultValue={props.cargo_td}
            SelectProps={{
              MenuProps: {
                  className: 'vnf-designer-value',
                  getContentAnchorEl: null,
                  anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                  }
              },
          }}        
            // onChange={handleChangeValues}
            fullWidth
          >
              <MenuItem select value="Desenvolvimento">
                {'Desenvolvimento'}
              </MenuItem>
                     
              <MenuItem value = {'Suporte em Redes'}>
                {'Suporte em Redes'}
              </MenuItem>

              <MenuItem value = {'Gerente'}>
                {'Gerente'}
              </MenuItem>

              <MenuItem value = {'Financeiro'}>
                {'Financeiro'}
              </MenuItem>

              <MenuItem value = {'Marketing'}>
                {'Marketing'}
              </MenuItem>
          </TextField>
          <br/><br/>
          <span>Data de cadastro do funcionario no sistema</span>
          <TextField
            autoFocus
            margin="dense"
            id="data"
            label=""
            defaultValue={props.data_td}
            type="date"
            // onChange={handleChangeValues}
            fullWidth
            readonly
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={fechar_modal} color="primary">
            Cancelar
          </Button>
          <Button color="primary" >
            Excluir
          </Button>
          <Button color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}