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
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            // defaultValue={}
            type="text"
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
              <MenuItem>
                          {'Primeira opção'}
                        </MenuItem>
                     
                        <MenuItem value = {'No Data Available'}>
                            {'No Data Available'}
                        </MenuItem>
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="preço"
            // defaultValue={}
            type="number"
            // onChange={handleChangeValues}
            fullWidth
          /> 
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            // defaultValue={}
            type="text"
            // onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
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