import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          URL Shortener
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/shorten">
          Shorten URL
        </Button>
        <Button color="inherit" component={Link} to="/stats">
          Statistics
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
