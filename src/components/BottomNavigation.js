import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FavoriteIcon from '@material-ui/icons/Favorite';
import List from '@material-ui/icons/ListAltRounded';
import Create from '@material-ui/icons/AddCircleOutlineRounded';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position:'absolute',
    bottom:0,
   
  },
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
//   const [value, setValue] = React.useState(props.value);

  return (
    <BottomNavigation
      value={props.value}
      onChange={(event, newValue) => {
        props.setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Tasks" icon={<List />} />
      {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
      <BottomNavigationAction label="Create" icon={<Create />} />
    </BottomNavigation>
  );
}