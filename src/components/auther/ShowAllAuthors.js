import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_AUTHORS_INFO} from "../../graphql/queries";
import { Loader } from "../Loader";
import { Link } from "react-router-dom";
import {
     Grid,
     Avatar,
     Typography,
     Container,
     Button,
     CardMedia,
   } from "@mui/material";

const ShowAllAuthors = () => {

     const {loading , data , errors} = useQuery(GET_AUTHORS_INFO)
     console.log("data",data)
     if (loading) return <Loader />;
     if (errors) return <h4>errors ...</h4>;
     return (
          <Container maxWidth="lg">
          <Grid
            item
            sx={{
              border: "2px solid #d1b9e6",
              marginTop: "25px",
              borderRadius: "10px",
            }}
          >
            <Typography
              component="h2"
              variant="h5"
              color="#a53eff"
              sx={{
                textAlign: "center",
                background: "#ffffff",
                width: "95%",
                margin: "4px auto",
                borderRadius: 8,
                fontWeight : "700"
                
              }}
            >
               نویسنده ها
            </Typography>
          </Grid>
    
          <Grid
            container
            spacing={3}
            padding={2}
            mt={2}
            style={{
              boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
              borderRadius: 15,
              mt: 2,
              py: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.authors.map((author) => (
              <Grid
                item
                xs={12}
                lg={3}
                md={4}
                sm={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItem: "center",
                  backgroundColor : "#d1b9e6",
                  boxShadow: "rgba(0,0,0,0.1) 0px 10px 15px",
                  margin: "5px 5px",
                  borderRadius: "12px",
          
                }}
              >
                <Typography
                  component="p"
                  variant="h5"
                  color="#27b0a3"
                  sx={{
                    textAlign: "center",
                    background: "#f7eeee",
                    width: "80%",
                    margin: "10px auto",
                    borderRadius: 16,
                   
                  }}
                >
                  {author.name}
                </Typography>

                <Grid item sx={{display : "flex" , justifyContent :"center"}}>
                    <Avatar src={author.avatar.url} sx={{marginLeft : 2 , width : "80%" , height : "100%"}}/>
                </Grid>
    
    
                <Link
                  to={`/authors/${author.slug}`}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    margin: "10px 5px",
                    border: "2px solid #fffff"
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%", borderRadius: 3 , color:"#fffff", }}
                  >
                     آشنایی بیشتر 
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
     );
}

export default ShowAllAuthors;


    