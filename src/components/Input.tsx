import React, { Dispatch, FC, SetStateAction } from "react";
import { TextField } from "@mui/material";

interface InputProps{
    value:string
    placeholder: string,
    onChangeText:Dispatch<SetStateAction<string>>,
    type: string,
}
const Input: FC<InputProps>=(props): JSX.Element=>{
    
    return(
        <div>
            <TextField
            value={props.value}
            onChange={(e:any)=>props.onChangeText(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label={props.placeholder}
            type={props.type}
            fullWidth
            variant="standard"
          />
        </div>
    );
}
export default Input;