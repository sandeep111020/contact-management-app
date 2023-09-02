export const CONTACT_ADDED = "contacts/addNewContact";
export const AddContact = (data:object)=>{
return { type: CONTACT_ADDED, payload: data}
} 

export const CONTACT_UPDATED ="contacts/updateContact";
export const UpdateContact=(data:object)=>{
    return {type:CONTACT_UPDATED,payload:data}
}