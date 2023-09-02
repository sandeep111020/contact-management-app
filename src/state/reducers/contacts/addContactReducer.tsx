import { CONTACT_ADDED, CONTACT_UPDATED } from "../../actions/contactActions";

const initialState = { contacts: [
    {id:1,name:"hi",number:888, status:'InActive'}
]};

export default function (state = initialState, action:any){
    switch( action.type){
        case CONTACT_ADDED:{
            console.log('action',action);
            
            return {...state,contacts:[ ...state.contacts,
                {
                id:state.contacts.length+1,
                name:action.payload.name,
                number: action.payload.number,
                status:action.payload.status
            }] };
        }
        case CONTACT_UPDATED:{

            return{
                ...state,
                contacts: state.contacts.map((item)=>
                    item.id===action.payload.id? {
                        id:action.payload.id,
                        name: action.payload.name,
                        number:action.payload.number,
                        status:action.payload.status
                    }:item
                )
            }
        }
        default:{
            return{
                ...state,
            };
        }
    }
}