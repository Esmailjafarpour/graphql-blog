import React, { useState } from "react";
import { Grid, Avatar, Typography, Divider ,Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const CommentForm = ({ slug }) => {

  const [allState, setAllState] = useState({ 
           name : '',
           email : '',
           text : ''
     });

   const changeHandler = (event) => (
          setAllState({
               ...allState,
               [event.target.name] : event.target.value
          }
     ))
    

  return (
    <Grid
      container
      style={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          components="p"
          variant="h6"
          fontWeight={700}
          color="primary"
        >
          فرم ارسال کامنت
        </Typography>
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          id="outlined-basic"
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%"}}
          name="name"
          onChange={(event)=> changeHandler(event)}
          value={allState.name}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="outlined-basic"
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          name="email"
          onChange={(event)=> changeHandler(event)}
          value={allState.email}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          id="outlined-basic"
          label="متن گامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          name="text"
          onChange={(event)=> changeHandler(event)}
          value={allState.text}
          multiline
        />
      </Grid>
      <Grid xs={12} m={2}>
          <Button variant="contained">ارسال</Button>
      </Grid>
    </Grid>
  );
};

export default CommentForm;
