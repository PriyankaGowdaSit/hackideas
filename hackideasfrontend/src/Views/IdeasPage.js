import React from 'react'
import { Button, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DialogComponent from '../Components/Dialog';
import IdeasCard from '../Components/IdeasCard';
export default function IdeasPage(){

    const ideas=[
        {
            'id':1,
            'title' : 'Card Title',
            'description' : 'Description of the title',
            'likes' : 22,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB'

        },
        {
            'id':2,
            'title' : 'Card Title New',
            'description' : 'Description of the title new',
            'likes' : 22,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB'

        },
        {
            'id':3,
            'title' : 'Card Title New 4',
            'description' : 'Description of the title',
            'likes' : 28,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB'

        },
        {
            'id':4,
            'title' : 'Card Title 7',
            'description' : 'Description of the title',
            'likes' : 22,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB'

        }
    ]

    const [displayIdeaFormDialog, setDisplayIdeaFormDialog] = React.useState(false)
   const handleCloseIdeaFormDialog = (dialogOpenStatus) =>{
       setDisplayIdeaFormDialog(dialogOpenStatus)
   }
   const handleSubmitIdeaFormDialog = (FormData) =>{
       console.log(FormData)
       setDisplayIdeaFormDialog(FormData['openStatus'])
   }
    return(
        <div>
          <Typography variant="h4" style={{ marginRight: "auto", marginLeft: 30 }}>All Ideas</Typography>
          <Button variant="contained" color="primary" onClick={() => setDisplayIdeaFormDialog(true)} ><AddIcon/>Add Idea</Button>
          <DialogComponent open={displayIdeaFormDialog} handleCloseCallBack={handleCloseIdeaFormDialog} handleSubmitCallBack={handleSubmitIdeaFormDialog}/>
          <IdeasCard ideas={ideas}/>
        </div>
    )
}