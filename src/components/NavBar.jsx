import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <AppBar  style={{background:"lightblue"}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='justify'><Link to='/Open' style={{textDecoration:'none',color:'ButtonHighlight'}}>Blog</Link></Typography>
                <Button variant="contained" color='warning'><Link to="/Home" style={{textDecoration:'none', color:'white'}}>DashBoard</Link></Button>&nbsp;
                <Button variant="contained" color='warning'><Link to="/AddBlog" style={{textDecoration:'none',color:'white'}}>Add</Link></Button>
            </Toolbar>
        </AppBar>

    </div>
  )
}

export default NavBar
