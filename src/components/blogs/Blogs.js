import React from 'react';

import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";

import {Container , Grid , Typography} from "@mui/material";

import CardEl from "../../components/shared/CardEl";

const Blogs = () => {

     const {loading ,data ,errors} = useQuery(GET_BLOGS_INFO)
    
     if(loading) return <h4>Loading ...</h4>
     if(errors) return <h4>Errors ...</h4>
     console.log(data)
     return (
          <Grid container spacing={2}>
               {data.posts.map(post => (
                  <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <CardEl {...post}/>
                  </Grid>  
               ))}
          </Grid>
     );
}

export default Blogs;
