import React, { useCallback } from "react";
import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography, useScrollTrigger, useTheme } from "@material-ui/core";
import { darkTheme, lightTheme } from "../src/theme";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import data from "../data.json";
import Timeline from "../components/Timeline";
const { name } = data;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
  },
}));

export default function Index({ setTheme }) {
  const classes = useStyles();

  const trigger = useScrollTrigger({ disableHysteresis: true });

  const theme = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme.palette.type === "dark" ? lightTheme : darkTheme));
  }, [setTheme]);

  return (
    <div className={classes.root}>
      <AppBar color={!trigger ? "transparent" : "inherit"} className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            {name}
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {theme.palette.type === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
      <Container>
        <Landing />
        <Skills />
        <Timeline />
        <Footer />
      </Container>
    </div>
  );
}
