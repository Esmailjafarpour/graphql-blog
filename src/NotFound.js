import React from 'react';
import {Container , Grid , Typography} from "@mui/material";

const NotFound = () => {
     return (
          <Container maxWidth="lg" sx={{marginTop : 15}}>

          <Grid container  style={{
               width: "100%",
               height: "370px",
               display: "flex",
               justifyContent: "center",
               textAlign:"center",
               paddingTop: "100px",
          }}>

               <Grid item xs={12} md={12} mt={12}>

                    <Typography component="h3" variant="h5" mb={3} fontWeight={700} color="secondary">
                         صفحه ی مورد نظر پیدا نشد
                    </Typography>

               </Grid>
          
          </Grid> 

     </Container>
     );
}

export default NotFound;
