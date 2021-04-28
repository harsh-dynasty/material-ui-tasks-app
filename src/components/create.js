import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useState } from 'react';

const useStyles = makeStyles({
    title: {
        width:"70%",
        margin:20,
        
    },
    body:{
        margin:20,
      
        width:"70%",
        
    },
   
  });
  
export default function Create({handleTasks}){
    const classes = useStyles();
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    return(
        <div>
             <TextField id="outlined-basic" label="Title" variant="outlined" className={classes.title} onChange={(e)=>setTitle(e.target.value)}/>
             <TextField
                label="Body"
                multiline
                rows={5}
                variant="outlined"
                className={classes.body}
                onChange={(e)=>setBody(e.target.value)}
                
                />
                <br/>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={()=>handleTasks(title,body)}
                startIcon={<SaveIcon />}
            >
                Add to tasks
            </Button>

        </div>
    )
    
}