import React from 'react'
import { Button, Grid } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import DialogComponent from '../Components/Dialog';
import IdeasCard from '../Components/IdeasCard';
import SelectComponent from '../Components/SelectComponent';
const styles = {
    root: {
        marginTop: -80
    },
    button: {
        marginLeft: 150,
        marginTop: 20
    },
    container: {
        width: 600,
        margin: 'auto'
    }

}
export default function IdeasPage(props) {
    const sortOptions = [{ value: "Upvotes" }, { value: "Date Created" }]
    const employeeId = props.employeeId
    const [ideas, setIdeas] = React.useState([])
    console.log(ideas)


    const [displayIdeaFormDialog, setDisplayIdeaFormDialog] = React.useState(false)
    React.useEffect(() => {

        if (JSON.parse(localStorage.getItem("data")) !== null) {
            var stored_data = JSON.parse(localStorage.getItem("data"))
            setIdeas(stored_data)
            const sortedIdeas = [...stored_data].sort((a, b) => {
                return b.likes - a.likes;
            });
            if (props.displayType === "byEmployee") {
                console.log(employeeId)
                var filteredIdeas = sortedIdeas.filter((item) =>
                    item['posted_by'] === employeeId
                )
                setIdeas(filteredIdeas)
            }
            else {
                setIdeas(sortedIdeas)
                console.log(ideas)
            }
        }





    }, [employeeId, ideas, props.displayType])
    const handleCloseIdeaFormDialog = (dialogOpenStatus) => {
        setDisplayIdeaFormDialog(dialogOpenStatus)
    }
    const handleSubmitIdeaFormDialog = (FormData) => {
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
        if (sortingOption === "Upvotes") {
            const sortedIdeas = [...ideas].sort((a, b) => {
                return b.likes - a.likes;
            });
            localStorage.setItem("data", JSON.stringify(sortedIdeas))
            setIdeas(sortedIdeas)
            console.log(ideas)
        }
        else {
            const sortedIdeas = [...ideas].sort((a, b) => {
                return new Date(b.date_posted) - new Date(a.date_posted);
            });
            setIdeas(sortedIdeas)
            localStorage.setItem("data", JSON.stringify(sortedIdeas))
            console.log(ideas)
        }
    }
    const handleLikesDecrement = (idea) => {
        var temp_idea = idea
        idea['liked_by'] = temp_idea['liked_by'].filter((item => item !== employeeId))
        // idea = temp_idea
        idea['likes'] = temp_idea['likes'] - 1
        console.log(idea)
        const updatedIdeas = ideas.map((item) =>
            item['title'] === idea['title'] ? idea : item
        );
        console.log(updatedIdeas)
        setIdeas(updatedIdeas)
        localStorage.setItem("data", JSON.stringify(updatedIdeas))



    }
    const handleLikesIncrement = (idea) => {
        var temp_idea = idea
        // temp_idea['liked_by'].push('Priyanka M.B')
        // idea = temp_idea
        idea['likes'] = temp_idea['likes'] + 1
        idea['liked_by'].push(employeeId)
        console.log(idea)
        const updatedIdeas = ideas.map((item) =>
            item['title'] === idea['title'] ? idea : item
        );
        console.log(updatedIdeas)
        setIdeas(updatedIdeas)
        localStorage.setItem("data", JSON.stringify(updatedIdeas))



    }

    return (
        <div style={styles.root}>
            {/* <Typography variant="h5" 
>All Ideas</Typography> */}
            <Grid container
                wrap="nowrap"
                style={styles.container} alignItems="center">
                <Grid item xs={6}>
                    {/* <Button variant="contained" color="primary" onClick={handleSort} style={{marginRight:'auto'}}>Sort</Button> */}
                    <SelectComponent selectList={sortOptions} title="Sort Options" handleSelection={sortBySelectedOption} />
                </Grid>
                <Grid item xs={6}>

                    <Button variant="contained" color="primary" onClick={() => setDisplayIdeaFormDialog(true)} style={styles.button} ><AddIcon />Add Idea</Button>
                </Grid>
            </Grid>
            <DialogComponent open={displayIdeaFormDialog} handleCloseCallBack={handleCloseIdeaFormDialog} handleSubmitCallBack={handleSubmitIdeaFormDialog} employeeId={employeeId} />
            <IdeasCard ideas={ideas} onLikesIncrement={handleLikesIncrement} onLikesDecrement={handleLikesDecrement} employeeId={employeeId} />
        </div>
    )
}