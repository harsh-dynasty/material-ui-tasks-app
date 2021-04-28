import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EachTask from './eachTask'
const useStyles = makeStyles({
    root: {
      width: '70%',
      marginLeft:'15%',
      overflowX: 'hidden',
      overflowY:'scroll',
      height:'70vh'
    },
  });
export default function Tasks({alltasks,handleCompleted}){
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

        
    return(
        <div className={classes.root}>
            {alltasks.map(task=><EachTask ex={expanded} handleChange={handleChange} task={task} handleCompleted={handleCompleted}/>)}
            
        </div>
    )
    
}