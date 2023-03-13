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


export default function FormDialog(props) {
 
  const handleClose = () => {
    props.setOpen(false);
  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };


  return (
    <div>
      <button onClick={handleClickOpen} className='botao'> <FontAwesomeIcon icon={faEye}/>  </button>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Informações do Funcionario</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome do Funcionario"
            // defaultValue={}
            type="number"
            // onChange={handleChangeValues}
            fullWidth
          /> 
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email do Funcionario"
            // defaultValue={}
            type="email"
            // onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="telefone"
            label="Telefone do Funcionario"
            // defaultValue={}
            type="text"
            // onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cpf"
            label="CPF do Funcionario"
            // defaultValue={}
            type="text"
            // onChange={handleChangeValues}
            fullWidth
          />

          <TextField
            select
            margin="dense"
            id="name"
            label="Nome do jogo"
            //defaultValue={}
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
              <MenuItem select value="Desenvolvedor">
                {'Desenvolvedor'}
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
            // defaultValue={}
            type="date"
            // onChange={handleChangeValues}
            fullWidth
            readonly
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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