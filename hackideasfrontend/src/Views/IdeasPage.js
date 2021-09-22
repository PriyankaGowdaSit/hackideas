import React from 'react'
import { Button, Grid, Typography } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import DialogComponent from '../Components/Dialog';
import IdeasCard from '../Components/IdeasCard';
import SelectComponent from '../Components/SelectComponent';
export default function IdeasPage(){
    const sortOptions = [{value:"Upvotes"},{value:"Date Created"}]
    const [ideas2, setIdeas2]=React.useState([
        {
           
            'title' : 'Card Title',
            'description' : 'Description of the title',
            'likes' : 22,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB',
            'date_posted' :  (new Date()).setDate(16),
            'liked_by' : ['Priyanka M.B', 'User2']

        },
        {
           
            'title' : 'Card Title New',
            'description' : 'Description of the title new',
            'likes' : 22,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB',
            'date_posted' :  (new Date()).setDate(15),
            'liked_by' : ['Priyanka M.B', 'User2']

        },
        {
           
            'title' : 'Card Title New 4',
            'description' : 'Description of the title',
            'likes' : 28,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB',
            'date_posted' :  (new Date()).setDate(1),
            'liked_by' : ['Priyanka M.B', 'User2']

        },
        {
           
            'title' : 'Card Title 7',
            'description' : 'Description of the title',
            'likes' : 22,
            'tags' : [{'id':1, 'value':"ML"},{'id':2, 'value':"AI"},{'id':3, 'value':"Cloud Computing"}],
            'posted_by' : 'Priyanka MB',
            'date_posted' : (new Date()).setDate(11),
            'liked_by' : ['Priyanka M.B', 'User2']

        }
    ])
    localStorage.setItem("data", JSON.stringify(ideas2))
    const [ideas, setIdeas]  = React.useState(JSON.parse(localStorage.getItem("data")))
    console.log(ideas)


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
       var updateIdeas = ideas
       console.log(FormData)
       setIdeas(ideas => [...ideas, FormData])
       console.log(updateIdeas)
      updateIdeas.push(FormData)
      console.log(updateIdeas)
       localStorage.setItem("data", JSON.stringify(updateIdeas))
       setDisplayIdeaFormDialog(false)
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
const handleLikesChange = (idea) =>{
    var temp_idea = idea
    idea['liked_by'] = temp_idea['liked_by'].filter((item=> item!='Priyanka M.B'))
    // idea = temp_idea
    idea['likes'] = temp_idea['likes']-1
   console.log(idea)
   const updatedIdeas = ideas.map((item) =>
      item['title'] === idea['title'] ? idea : item
    );
    console.log(updatedIdeas)
    setIdeas(updatedIdeas)



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
          <IdeasCard ideas={ideas} onLikesChange={handleLikesChange}/>
        </div>
    )
}