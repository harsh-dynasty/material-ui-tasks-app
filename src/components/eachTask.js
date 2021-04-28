import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const initialState = {
  mouseX: null,
  mouseY: null,
};
const useStyles = makeStyles({
    root: {
      color:'red',
      textDecoration:'line-through'
    },
   
  });
export default function EachTask({ex,handleChange,task,handleCompleted,handleDelete}){
    const classes = useStyles();
    const [state, setState] = React.useState(initialState);

    const handleClick = (event) => {
      event.preventDefault();
      setState({
        mouseX: event.clientX - 2,
        mouseY: event.clientY - 4,
      });
    };
    const deleteTask = ()=>{
      handleDelete(task.id)
      handleClose()
    }
    const handleClose = () => {
      
      setState(initialState);
    };
    return(
      <div onContextMenu={handleClick}>
    <Accordion expanded={ex === task.id} onChange={handleChange(task.id)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-label="Expand"
      aria-controls="additional-actions1-content"
      
    >
      <FormControlLabel
      
        aria-label="Acknowledge"
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
        control={
        <Checkbox color='primary' checked={task.completed} onChange={()=>handleCompleted(task.id)}/>
      }
        label={task.title}
        className={task.completed && classes.root}
      />
      
     
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {task.body}
        
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={()=>deleteTask()} style={{color:'red'}}><Delete/>Delete</MenuItem>
        
      </Menu>
  </div>
  );
}