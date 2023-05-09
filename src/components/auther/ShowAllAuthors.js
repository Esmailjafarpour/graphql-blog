import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_AUTHORS_INFO} from "../../graphql/queries";

const ShowAllAuthors = () => {

     const {loading , data , errors} = useQuery(GET_AUTHORS_INFO)
     console.log("data",data)
     
     return (
          <div>
               <h1>All Authors</h1>
          </div>
     );
}

export default ShowAllAuthors;


    