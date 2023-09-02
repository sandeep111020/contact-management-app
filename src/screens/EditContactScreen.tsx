import React, { FC, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from "../components/Input";
import ControlledRadioButtonsGroup from "../components/RadioButtonGroup/RadioButtonGroup";
interface EditContactProps{
showModal:boolean,
closeModal: (boo:boolean)=>void,
id:any,
status:any,
number:any,
name:any,
updateContact:any
}
const EditContactScreen:FC<EditContactProps> = (props)=>{
    const [name,setName]= useState(props.name);
    const [number,setNumber]=useState(props.number);
    const [status,setStatus]=useState(props.status);
    useEffect(()=>{setName(props.name)},[props.name]);
    useEffect(()=>{setNumber(props.number)},[props.number]);
    useEffect(()=>{setStatus(props.status)},[props.status]);
    return(
        <div>
        <Dialog open={props.showModal} >
        <DialogTitle>Update Contact</DialogTitle>
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
          <Button onClick={()=>props.updateContact(props.id,name,number,status)}>Save Contact</Button>
        </DialogActions>

      </Dialog>
        </div>
    )
}

export default EditContactScreen;