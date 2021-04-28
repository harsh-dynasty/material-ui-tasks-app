import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      color:'red',
      textDecoration:'line-through'
    },
    
  });
export default function EachTask({ex,handleChange,task,handleCompleted}){
    const classes = useStyles();
    
    return(
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
        control={<Checkbox color='primary' checked={task.completed} onChange={()=>handleCompleted(task.id)}/>}
        label={task.title}
        className={task.completed && classes.root}
      />
    </AccordionSummary>
    <AccordionDetails>
      <Typography color="textSecondary">
        {task.body}
      </Typography>
    </AccordionDetails>
  </Accordion>);
}