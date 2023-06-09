import React from "react";

import { Grid , Avatar , Typography , Divider } from "@mui/material";

import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";

import {Link} from "react-router-dom";

import {Loader} from "../Loader";

const Authers = () => {

  const {loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader/>
  if (errors) return <h3>Errors ...</h3>;

  const {authors} = data;

  return (
    <Grid
      container
      style={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 ,marginTop : 5 }}
    >
     {authors.map((author,index) => (
           <React.Fragment key={author.id}>
               <Grid item xs={12} padding={2}>
                    <Link to={`/authors/${author.slug}`} style={{display : "flex" ,alignItems : "center" , textDecoration : "none"}}>
                         <Avatar src={author.avatar.url} sx={{marginLeft : 2}}/>
                         <Typography component="p" variant="p" color="text.secondary">{author.name}</Typography>
                    </Link>
               </Grid>
               {index !== authors.length - 1 
               &&
               (
               <Grid item xs={12}>
                    <Divider variant="middle"/>
               </Grid> 
               )}
               
          </React.Fragment>
     ))}
    </Grid>
  );
};

export default Authers;
