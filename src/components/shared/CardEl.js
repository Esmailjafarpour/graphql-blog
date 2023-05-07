import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

const CardEl = ({ title, slug, coverPhoto, author }) => {
  
  return (
    <div>
      <Card
        style={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
      >
        {author && (
          <CardHeader
            avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
            title={
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            }
          />
        )}

        <CardMedia
          component="img"
          image={coverPhoto.url}
          height="194"
          alt={slug}
          fontWeight={600}
          style={{borderRadius : 15}}
        />
        <CardContent>
          <Typography component="h3" variant="h6" color="text.primary">
            {title}
          </Typography>
        </CardContent>
        <Divider variant="middle" sx={{ margin: "10px" }} />
        <CardActions>
          <Link
            to={`/blogs/${slug}`}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{ width: "100%", borderRadius: 3 }}
            >
              مطالعه ی مقاله
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardEl;
