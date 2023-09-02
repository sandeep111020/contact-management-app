import React, { FC, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from "../components/Input";
import { AddContact } from "../state/actions/contactActions";
import {connect} from 'react-redux';
import ControlledRadioButtonsGroup from "../components/RadioButtonGroup/RadioButtonGroup";
interface newContactProps{
    showModal:boolean,
    closeModal: (boo:boolean)=>void,
    actions: any,
}

const NewContactScreen:FC<newContactProps> = (props): JSX.Element=>{
  const [name,setName] = useState('');
  const [number, setNumber] = useState('');
  const [status,setStatus]=useState('');
  const addContact =()=>{
    const payload= {
      name,
      number,
      status,
    }
    console.log('ini methd');
    
    props.closeModal(props.showModal);
    props.actions.addContact(payload);
    setName('');
    setNumber('')
  }
    return(
        <div>
        <Dialog open={props.showModal} >
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent>
          <Input
          value={name}
          placeholder="Name"
          type="text"
          onChangeText={setName}
          />

         <Input
          value={number}
          placeholder="Conatct Number"
          type="number"
          onChangeText={setNumber}
          />
           <ControlledRadioButtonsGroup
          status={status}
          onChangeStatus={setStatus}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>props.closeModal(props.showModal)}>Cancel</Button>
          <Button onClick={addContact}>Add Number</Button>
        </DialogActions>

      </Dialog>
        </div>
    )
}
const mapStateToProps=(state:any)=>{

  return{
    contacts: state.contacts
  }
}
const mapDispatchToProps = (dispatch:any) => ({
    actions:{
        addContact:(payload:any)=>{
          dispatch(AddContact(payload));
        }
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(NewContactScreen);