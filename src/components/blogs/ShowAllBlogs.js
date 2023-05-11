import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Link } from "react-router-dom";
import { Loader } from "../Loader";
import {
  Grid,
  Typography,
  Container,
  Button,
  CardMedia,
} from "@mui/material";

const ShowAllBlogs = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  if (loading) return <Loader/>;
  if (errors) return <h4>errors ...</h4>;
  return (
    <Container maxWidth="lg" mt={2}>
      <Grid
        item
        sx={{
          marginTop: "170px",
          borderRadius: "10px",
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          color="#ffffff"
          sx={{
            textAlign: "center",
            background: "#37bfc6",
            width: "95%",
            margin: "4px auto",
            borderRadius: 8,
            padding: "5px 0",
          }}
        >
          وبلاگ ها
        </Typography>
      </Grid>

      <Grid
        container
        spacing={3}
        padding={2}
        xs={12}
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
        {data.posts.map((post) => (
          <Grid
            item
            xs={12}
            lg={3}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItem: "center",
              backgroundColor: "#d3eae2",
              boxShadow: "rgba(0,0,0,0.1) 0px 10px 15px",
              margin: "5px",
              borderRadius: "12px",
              padding: 2,
            }}
          >
            <Typography
              component="h5"
              variant="p"
              color="secondary"
              sx={{
                textAlign: "center",
                background: "#ccc",
                width: "80%",
                margin: "10px auto",
                borderRadius: 16,
                padding: "10px 0",
              }}
            >
              {post.title}
            </Typography>

            <CardMedia
              component="img"
              image={post.coverPhoto.url}
              width="80%"
              height="100%"
              alt={post.slug}
              fontWeight={600}
              style={{ borderRadius: 15 }}
            />

            <Link
              to={`/blogs/${post.slug}`}
              style={{
                textDecoration: "none",
                width: "100%",
                margin: "10px 5px",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                sx={{ width: "100%", borderRadius: 3 }}
              >
                مطالعه ی مقاله
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShowAllBlogs;
