import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 , position : "relative" }}>
      <AppBar position="fixed">
        <Container maxWidth="lg" sx={{ backgroundColor: "secondary" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              fontWeight="700"
              sx={{ flexGrow: 0.5 }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                وبلاگ نادر
              </Link>
            </Typography>

            <Grid
              sx={{ flexGrow: 0.5, display: "flex", justifyContent: "center" }}
            >
              <Typography component="h6" variant="h6" fontWeight="700" px={1}>
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "rgb(230, 199, 79)" }}
                >
                  وبلاگ ها
                </Link>
              </Typography>

              <Typography component="h6" variant="h6" fontWeight="700" px={1}>
                <Link
                  to="/authors"
                  style={{ textDecoration: "none", color: "rgb(230, 199, 79)" }}
                >
                  نویسنده ها
                </Link>
              </Typography>
            </Grid>

            <Link to="/" style={{ color: "#fff" }}>
              <MenuBookIcon />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
