import { Button } from "@mui/material";
import React, { FC, useState } from "react";
import NewContactScreen from "./NewContactScreen";
import {connect} from 'react-redux';
import EditContactScreen from "./EditContactScreen";
import { UpdateContact } from "../state/actions/contactActions";

interface AllContactsProps{
    contacts: any,
    actions:any
}
const AllContactsScreen: FC<AllContactsProps> = (props)=>{
    const [showModal,setShowModal] = useState(false);
    const [editModal,setEditModal] = useState(false);
    const [editNumber,setEditNumber] = useState('');
    const [editName,setEditName]=useState('');
    const [editStatus,setEditStatus]=useState('');
    const closeModalHandler =(prev:boolean)=>{
        setShowModal(!prev);
    }
    const closeEditModalHandler =(prev:boolean)=>{
        console.log('close',prev);
        
        setEditModal(!prev);
        setEditName('');
        setEditNumber('');
    }
   
    console.log('contacts',props.contacts);
    const editContact=(id:any,name:any,number:any,status:any)=>{        
        setEditName(name);
        setEditNumber(number);
        setEditStatus(status);
        setEditModal(true);
    }
    const updateContactHandler =(id:any,name:any,number:any,status:any)=>{
        props.actions.updateContact({id,name,number,status});
        setEditModal(true);
        setEditName('');
        setEditNumber('');

    }
    return(
        <div>
            <Button onClick={()=>setShowModal(true)} > Add New Contact </Button>
            <NewContactScreen
               showModal={showModal}
               closeModal={closeModalHandler}
            />
            <div>
                {props.contacts.map((item:any)=>(
                    <div key={item.id} >
                        <div>Name: {item.name}</div>
                        <div>Number: {item.number}</div>
                        <div>Status: {item.status}</div>
                        <Button onClick={()=>editContact(item.id,item.name,item.number,item.status)}>Edit</Button>
                        <Button>Delete</Button>
                        <EditContactScreen
                        updateContact={updateContactHandler}
                          showModal={editModal}
                          closeModal={closeEditModalHandler}
                          id={item.id}
                          name={editName}
                          number={editNumber}
                          status={editStatus}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}
const mapStateToProps=(state:any)=>{
    return{
        contacts: state.contacts.contacts,
    };
};
const mapDispatchToProps = (dispatch:any) => ({
    actions:{
        updateContact:(payload:any)=>{
          dispatch(UpdateContact(payload));
        }
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(AllContactsScreen);