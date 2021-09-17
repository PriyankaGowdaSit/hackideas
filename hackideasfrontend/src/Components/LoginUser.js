import React from 'react'
import { Button, Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useHistory } from "react-router-dom";
export default function LoginUser() {

    const [employeeId, setEmployeeId] = React.useState('')
    const history = useHistory();

    const handleEmployeeLogin = () => {
        history.push("/ideas")
    }

    return (
        <div>






            <div style={{ marginTop: 100, display: "flex" }}>
                <Typography variant="h4" style={{ marginRight: "auto", marginLeft: 30 }}>Welcome to SherHackers Home.</Typography>
            </div>
            <div style={{ marginTop: 10, display: "flex" }}>
                <Typography style={{ marginRight: "auto", marginLeft: 40 }}>Forum to share your ideas and explore others ideas. Please login using your employee id</Typography>
            </div>
            <Grid container>

                <Grid item xs={12} md={12} lg={12} style={{ display: "flex" }}>
                    <div style={{ marginTop: 100, display: "flex" }}>
                        <TextField autoFocus id="outlined-basic" label="Employee Id" variant="outlined" style={{ marginLeft: 50 }} value={employeeId} onChange={(event) => setEmployeeId(event.target.value)} />
                        <Button color="primary" variant="contained" onClick={handleEmployeeLogin} style={{ width: 200, height: 50, marginLeft: 50 }} disabled={employeeId !== '' ? false : true}>Get Started<ArrowRightAltIcon /></Button>
                    </div>

                    <img src="/Images/coverpage.png" height="600" width="450" style={{ marginLeft: "auto", marginRight: 150 }} />

                </Grid>
                {/* <Grid item xs={12} md={12} style={{display:"flex"}}>
              
       </Grid> */}
            </Grid>


        </div>


    )
}