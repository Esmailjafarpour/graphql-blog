import React from 'react';

import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";


const Blogs = () => {

     const {loading ,data ,errors} = useQuery(GET_BLOGS_INFO)
    
     if(loading) return <h4>Loading ...</h4>
     if(errors) return <h4>Errors ...</h4>
     console.log(data)
     return (
          <div>
              Blog 
          </div>
     );
}

export default Blogs;
