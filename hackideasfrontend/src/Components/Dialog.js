import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import DialogTitle from '@mui/material/DialogTitle';
export default function DialogComponent(props) {

  const [topicName, setTopicName] = React.useState('')

  const [topicDescription, setTopicDescription] = React.useState('')

  const [tags, setTags] = React.useState([])
    
      const handleClose = () => {
          props.handleCloseCallBack(false)
      };

      const handleSubmit = () => {
          console.log('submit')
          console.log()
          const parentReturnData= {
              'openStatus': false,
              'topicName' : topicName,
              'topicDescription' : topicDescription,
              'tags' : tags
          }
        props.handleSubmitCallBack(parentReturnData)
    };

      return(

      <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Add Idea</DialogTitle>
      <DialogContent>
        <DialogContentText>
         
        </DialogContentText>
        <TextField
          autoFocus
          className="textfield"
          margin="dense"
          id="name"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          value={topicName}
          onChange={(event) => setTopicName(event.target.value)}
        />
         <TextField
          className="textfield"
          margin="dense"
          id="name"
          label="Description"
          type="textarea"
          fullWidth
          variant="outlined"
          value={topicDescription}
          onChange={(event) => setTopicDescription(event.target.value)}
        />
          <Autocomplete
        multiple
        className="textfield"
        id="tags-outlined"
        options={preDefinedTags}
        getOptionLabel={(option) => option.value}
        // defaultValue={[top100Films[0]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tags"
            placeholder="Tags"
          />
        )}
        onChange={(event, newValue) => {
           setTags(newValue)
        }}
      />
      </DialogContent>
      <DialogActions>
      <Button onClick={handleSubmit}>Submit Idea</Button>
        <Button onClick={handleClose}>Cancel</Button>
       
      </DialogActions>
    </Dialog>
      )

      
}

const preDefinedTags = [
    { id: 1, value:  'ML / AI'},
    { id: 2, value: 'IOT' },
    { id: 3 , value: 'Data analytics' },
    { id: 4, value: 'Robotics' },
    { id: 5, value: 'BlockChain' },
    { id: 6 , value: 'Edge Computing. ' },
    { id: 7 , value: 'Cyber Security' }
]


