import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { InsertEmoticon, SettingsSystemDaydreamSharp } from '@material-ui/icons';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function BasicCard(props) {
    // const [ideas, setIdeas] = React.useState(props.ideas)
    const [displayUpdatedData, setDisplayUpdatedData] = React.useState(false)
  
    const handleClick = () =>{
      console.log('clicked')
    }
    const handleLikesDecrement = (idea) =>{
    
    
      props.onLikesDecrement(idea)
    }
    const handleLikesIncrement = (idea) =>{
      
    
      props.onLikesIncrement(idea)
    }
  return (
     <div>
     {/* {console.log(ideas)} */}
     {/* <Button variant="contained" color="primary" onClick={handleSort}>Sort</Button> */}
     <div style={{marginTop:40, marginLeft:300}}>
      {props.ideas.map((idea,i) => {
          return(
    <Card key={i} sx={{ minWidth: 275, maxWidth: 700 , marginLeft:10, marginTop:3}}>
      <CardContent>
        <Typography style={{ fontSize: 20 , color:"#1e90ff", alignItems:"left", display:"flex"}}>
        {idea.title}
        </Typography>
        <div style={{display:"flex", marginTop:10 }}>
      <Chip label="Clickable" size="small"/>
        <Chip label="Clickable2" size="small"/>
        <Chip label="Clickable" size="small"/>
      
        </div>
        <Typography style={{ fontSize: 13 , alignItems:"left", display:"flex", marginTop:10}}>
        {idea.description}
        </Typography>
        <div style={{marginTop:20}}>
        <Typography style={{ fontSize: 12, color:"grey", display:"flex", alignItems:"left"}}>{idea.posted_by}</Typography>
        <div style={{display: 'flex', justifyContent:'flex-end', marginTop:-30}}>
        <Typography inline variant="body1" style={{ fontSize: 12, color:"grey"}} align="right">{idea.likes}
        {/* <FormControlLabel
        onClick={handleClick}
        control={<Checkbox icon={<FavoriteBorder checked={true}/>} 
                  checkedIcon={<Favorite/>}
          name="checkedH" defaultChecked />}
       
      /> */}
      {(idea.liked_by).includes('Priyanka M.B') ? (
        <FavoriteIcon style={{color:"red"}} onClick={() => handleLikesDecrement(idea)}/>
      ):(
       <FavoriteBorder onClick={() => handleLikesIncrement(idea)}/>
      )}
      </Typography>
      </div>
       
      </div>
      </CardContent>
     
     
       
    </Card>
          )
      })}
      </div>
      </div>
    
     
  );
  
}
