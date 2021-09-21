import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PinDropSharp } from '@material-ui/icons';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
export default function SelectComponent(props) {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    
       <Autocomplete
        className="textfield"
        id="tags-outlined"
        options={props.selectList}
        getOptionLabel={(option) => option.value}
        defaultValue={props.selectList[0]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.title}
            placeholder={props.title}
          />
        )}
        onChange={(event, newValue) => {
            if(newValue!=null){
         props.handleSelection(newValue)
            }
        }}
      />
     
    
  );
}