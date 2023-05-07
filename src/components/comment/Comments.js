import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/queries";


const Comments = ({slug}) => {
    const {loading , data, errors} = useQuery(GET_POST_COMMENTS,{
     variables : {slug}
    })
    console.log(data)
     return (
          <div>
               fdgfdg
          </div>
     );
}

export default Comments;
