import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioProps{
    status:any,
    onChangeStatus:any,
}
const ControlledRadioButtonsGroup:React.FC<RadioProps>=(props:any)=> {

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.status}
        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>props.onChangeStatus((event.target as HTMLInputElement).value)}
      >
        <FormControlLabel value="Active" control={<Radio />} label="Active" />
        <FormControlLabel value="InActive" control={<Radio />} label="InActive" />
      </RadioGroup>
    </FormControl>
  );
}
export default ControlledRadioButtonsGroup;