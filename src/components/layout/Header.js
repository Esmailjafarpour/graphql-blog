import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";


const Header = () => {
     return (
          <Box sx={{ flexGrow: 1 }}>

               <AppBar position="static">

               <Container maxWidth="lg">
                    <Toolbar>

                         <Typography variant="h6" component="div" fontWeight="700" sx={{ flexGrow: 1 }}>

                              <Link to="/" style={{textDecoration : "none" , color : "#fff"}}>  
                                    وبلاگ نادر
                              </Link>

                         </Typography>
                       
                         <Link to="/" style={{ color : "#fff"}}>  
                              <MenuBookIcon/>
                         </Link>

                    </Toolbar> 

               </Container>     

               </AppBar>

          </Box>
     );
}

export default Header;
