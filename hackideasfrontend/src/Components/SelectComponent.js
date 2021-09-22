import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
export default function SelectComponent(props) {
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