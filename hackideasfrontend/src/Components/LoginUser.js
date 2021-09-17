import { Button, Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function LoginUser(){
    return(
       <div>
         
 
    
 
  

        <div style={{marginTop:100, display:"flex"}}>
       <Typography variant="h4" style={{marginRight:"auto", marginLeft:30}}>Welcome to SherHackers Home.</Typography>
       </div>
       <div style={{marginTop:10, display:"flex"}}>
       <Typography  style={{marginRight:"auto", marginLeft:40}}>Forum to share your ideas and explore others ideas. Please login using your employee id</Typography>
       </div>
       <Grid container>
       
       <Grid item xs={12} md={12} lg={12} style={{display:"flex"}}>
       <div style={{marginTop:100, display:"flex"}}>
       <TextField id="outlined-basic" label="Employee Id" variant="outlined" style={{marginLeft:50}}/>
       <Button color="primary" variant="contained" style={{width:200, height:50, marginLeft:50}}>Get Started<ArrowRightAltIcon/></Button>
       </div>
      
           <img src="/Images/coverpage.png" height="600" width="450" style={{marginLeft:"auto", marginRight:150}}/>
        
           </Grid>
           {/* <Grid item xs={12} md={12} style={{display:"flex"}}>
              
       </Grid> */}
       </Grid>
    
       
       </div>
     
        
    )
}