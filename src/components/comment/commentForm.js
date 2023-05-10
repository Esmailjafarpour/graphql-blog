import React, { useState, useEffect } from "react";
import { Grid, Avatar, Typography, Divider, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RTL from "../../mui/RTL";
import { Validate } from "../Validate";

const CommentForm = ({ slug }) => {
  const [allState, setAllState] = useState({
    name: "",
    email: "",
    text: "",
    pressed: false,
  });
  const [touched, setTouched] = useState({});
  const [errorsFeild, setErrorsFeild] = useState({});

  useEffect(() => {
    setErrorsFeild(Validate(allState));
    console.log("allState", allState);
    console.log("touched", touched);
  }, [touched, allState]);

  const changeHandler = (event) =>
    setAllState({
      ...allState,
      [event.target.name]: event.target.value,
    });

  const focusHandler = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: {
      name: allState.name,
      email: allState.email,
      text: allState.text,
      slug,
    },
  });

  const sendHandler = () => {
    if (allState.name && allState.email && allState.text) {
      sendComment();
      setAllState({
        ...allState,
        pressed: true,
      });
    } else {
      toast.warn("تمام فیلد ها را پر کنید", {
        position: "top-center",
      });
    }
  };

  if (data && allState.pressed) {
    toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
      position: "top-center",
    });
    setAllState({
      ...allState,
      name: "",
      email: "",
      text: "",
      pressed: false,
    });
  }

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
        <RTL>
          <TextField
            id="outlined-basic"
            label="نام کاربری"
            variant="outlined"
            sx={{ width: "100%" }}
            name="name"
            onChange={(event) => changeHandler(event)}
            onFocus={(event) => focusHandler(event)}
            value={allState.name}
          />
          {touched.name && errorsFeild.name && (
            <span style={{ color: "rgb(221, 123, 18)" }}>
              {errorsFeild.name}
            </span>
          )}
        </RTL>
      </Grid>
      <Grid item xs={12} m={2}>
        <RTL>
          <TextField
            id="outlined-basic"
            label="ایمیل"
            variant="outlined"
            sx={{ width: "100%" }}
            name="email"
            onChange={(event) => changeHandler(event)}
            onFocus={(event) => focusHandler(event)}
            value={allState.email}
          />
          {touched.email && errorsFeild.email && (
            <span style={{ color: "rgb(221, 123, 18)" }}>
              {errorsFeild.email}
            </span>
          )}
        </RTL>
      </Grid>
      <Grid item xs={12} m={2}>
        <RTL>
          <TextField
            id="outlined-basic"
            label="متن کامنت"
            variant="outlined"
            sx={{ width: "100%" }}
            name="text"
            onChange={(event) => changeHandler(event)}
            onFocus={(event) => focusHandler(event)}
            value={allState.text}
            multiline
          />
          {touched.text && errorsFeild.text && (
            <span style={{ color: "rgb(221, 123, 18)" }}>
              {errorsFeild.text}
            </span>
          )}
        </RTL>
      </Grid>
      <Grid xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            ... در حال ارسال
          </Button>
        ) : allState.name &&
          allState.email &&
          allState.text &&
          !errorsFeild.name &&
          !errorsFeild.email &&
          !errorsFeild.text ? (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        ) : (
          <Button variant="contained" disabled>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
