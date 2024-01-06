import React from 'react';
import { Link } from 'react-router-dom'; // remove BrowserRouter
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
// icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PageviewIcon from '@mui/icons-material/Pageview';
import TodayIcon from '@mui/icons-material/Today';


const ButtonAppBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#40bf77' }}>
      <Toolbar sx={{ justifyContent: 'space-around', alignItems: 'center' }}>

        <IconButton color="inherit" component={Link} to="/">
          <TodayIcon />
        </IconButton>

        <IconButton color="inherit" component={Link} to="/add-plan">
          <AddCircleOutlineIcon />
        </IconButton>

        <IconButton color="inherit" component={Link} to="/view-plans">
          <PageviewIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}

export default ButtonAppBar
