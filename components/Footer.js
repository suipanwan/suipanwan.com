import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'inherit',
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 ",
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "inherit",
    fontSize: "1em",
  },
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid
          item
          container
          justifyContent="flex-start"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            &copy;suipanwan
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};