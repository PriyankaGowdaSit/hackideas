import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Toolbar from '@mui/material/Toolbar';
import moment from 'moment'

const styles = {
  title: {
    fontSize: 20, marginTop: 10, color: "#0175EB"
  },

  description: {
    fontSize: 13
  },
  footer: {
    fontSize: 12, color: "green"
  },
  typography: {
    color: "grey",
    marginTop: 30,
    marginLeft: -150
  }
}



export default function BasicCard(props) {

  const handleLikesDecrement = (idea) => {


    props.onLikesDecrement(idea)
  }
  const handleLikesIncrement = (idea) => {


    props.onLikesIncrement(idea)
  }
  return (

    <div className="center">
      {props.ideas.length !== 0 ? (
        <div>
          {props.ideas.map((idea, i) => {
            return (
              <Card key={i} sx={{ minWidth: 600, maxWidth: 600, marginTop: 3 }}>
                <CardContent>

                  <Box sx={{ flexGrow: 1 }}>
                    <Toolbar>
                      <Typography style={styles.title}>
                        {idea.title}
                      </Typography>
                    </Toolbar>

                    <Toolbar>
                      <div style={styles.description}>

                        {(idea.tags).map(tag => {
                          return (
                            <Chip label={tag.value} size={tag.value} />
                          )
                        })}



                      </div>
                    </Toolbar>
                    <Typography style={styles.description}>
                      {idea.description}
                    </Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Toolbar>
                      <Typography style={styles.footer}>{idea.posted_by}</Typography>
                      <Box sx={{ flexGrow: 0.1 }} />
                      <Typography style={styles.footer}>{moment(idea.date_posted).format(`LLL`)}</Typography>

                      <Box sx={{ flexGrow: 1 }} />

                      {/* <div style={{display: 'flex', justifyContent:'flex-end', marginTop:-30}}> */}
                      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography inline variant="body1" style={styles.description}>{idea.likes}</Typography>
                        {/* <FormControlLabel
        onClick={handleClick}
        control={<Checkbox icon={<FavoriteBorder checked={true}/>} 
                  checkedIcon={<Favorite/>}
          name="checkedH" defaultChecked />}
       
      /> */}
                        {(idea.liked_by).includes(props.employeeId) ? (
                          <FavoriteIcon style={{ color: "red" }} onClick={() => handleLikesDecrement(idea)} />
                        ) : (
                          <FavoriteBorder onClick={() => handleLikesIncrement(idea)} />
                        )}


                        {/* </div> */}
                      </Box>
                    </Toolbar>
                  </Box>
                </CardContent>



              </Card>
            )
          })}
        </div>
      ) : (
        <Typography style={styles.typography}>No ideas</Typography>
      )}
    </div>



  );

}
