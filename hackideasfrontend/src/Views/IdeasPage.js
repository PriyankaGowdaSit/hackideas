import React from 'react'
import { Button, Grid, Typography } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import DialogComponent from '../Components/Dialog';
import IdeasCard from '../Components/IdeasCard';
import SelectComponent from '../Components/SelectComponent';
export default function IdeasPage(){
    const sortOptions = [{value:"Upvotes"},{value:"Date Created"}]
    const [ideas, setIdeas]=React.useState([
        {
            'id':1,
            'title' : 'Card Title',
            'description' : 'Description of the title',
            'likes' : 22,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB',
            'date_posted' :  (new Date()).setDate(16)

        },
        {
            'id':2,
            'title' : 'Card Title New',
            'description' : 'Description of the title new',
            'likes' : 22,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB',
            'date_posted' :  (new Date()).setDate(15)

        },
        {
            'id':3,
            'title' : 'Card Title New 4',
            'description' : 'Description of the title',
            'likes' : 28,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB',
            'date_posted' :  (new Date()).setDate(1)

        },
        {
            'id':4,
            'title' : 'Card Title 7',
            'description' : 'Description of the title',
            'likes' : 22,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB',
            'date_posted' : (new Date()).setDate(11)

        }
    ])


    const [displayIdeaFormDialog, setDisplayIdeaFormDialog] = React.useState(false)
    React.useEffect(() =>{
     
 const sortedIdeas = [...ideas].sort((a, b) => {
            return b.likes - a.likes;
          });
      setIdeas(sortedIdeas)
      console.log(ideas)

    }, [])
   const handleCloseIdeaFormDialog = (dialogOpenStatus) =>{
       setDisplayIdeaFormDialog(dialogOpenStatus)
   }
   const handleSubmitIdeaFormDialog = (FormData) =>{
       console.log(FormData)
       setDisplayIdeaFormDialog(FormData['openStatus'])
   }
  

const sortBySelectedOption = (sortOption) => {
    const sortingOption = sortOption['value']
     if(sortingOption==="Upvotes"){
        const sortedIdeas = [...ideas].sort((a, b) => {
            return b.likes - a.likes;
          });
      setIdeas(sortedIdeas)
      console.log(ideas)
     }
     else {
        const sortedIdeas = [...ideas].sort((a, b) => {
            return new Date(b.date_posted)- new Date(a.date_posted);
          });
      setIdeas(sortedIdeas)
      console.log(ideas) 
     }
}
    return(
        <div style={{marginTop:50}}>
          <Typography variant="h4" style={{ marginRight: "auto", marginLeft: 30 }}>All Ideas</Typography>
          <Grid container style={{marginLeft:450, marginTop:50}}>
              <Grid item xs={2}>
               {/* <Button variant="contained" color="primary" onClick={handleSort} style={{marginRight:'auto'}}>Sort</Button> */}
               <SelectComponent  selectList={sortOptions} title="Sort Options" handleSelection={sortBySelectedOption}/>
               </Grid>
               <Grid item xs={2} style={{marginLeft:200, marginTop:40}}>
                   
          <Button variant="contained" color="primary" onClick={() => setDisplayIdeaFormDialog(true)} ><AddIcon/>Add Idea</Button>
          </Grid>
          </Grid>
          <DialogComponent open={displayIdeaFormDialog} handleCloseCallBack={handleCloseIdeaFormDialog} handleSubmitCallBack={handleSubmitIdeaFormDialog}/>
          <IdeasCard ideas={ideas}/>
        </div>
    )
}