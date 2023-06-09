import React from 'react';
import {Container , Grid , Typography} from "@mui/material";
import Authers from "../auther/Authers";
import Blogs from "../blogs/Blogs";

const HomePage = () => {
     return (
          <Container maxWidth="lg" sx={{marginTop : 15}}>

               <Grid container spacing={2} padding={3}>

                    <Grid item xs={12} md={3} mt={4}>

                         <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                              نویسنده ها
                         </Typography>

                         <Authers/>

                    </Grid>

                    <Grid item xs={12} md={9} mt={4}>

                         <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                              مقالات
                         </Typography>

                         <Blogs/>

                    </Grid>
               
               </Grid> 

          </Container>
     );
}

export default HomePage;
