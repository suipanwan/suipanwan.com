import { Avatar, Fade, Grid, Hidden, makeStyles, Tooltip, Typography, useMediaQuery, useTheme, Zoom } from "@material-ui/core";
import ReactTyped from "react-typed";
import clsx from "clsx";
import simpleIcons from "simple-icons";
import data from "../data.json";
import { iconify } from "./util";
import Cancel from "@material-ui/icons/Cancel";
const { landing } = data;

const professionalDetails = landing.professionalDetails.map(({ alt, icon, link }) => {
  const ic = simpleIcons.Get(iconify(icon)) || {
    hex: "424242",
    component: <Cancel color="white" fontSize={36} />,
  };
  return {
    alt,
    backgroundColor: "#" + ic.hex,
    icon: ic.component || (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>{icon}</title>
        <path d={ic.path} fill="white" />
      </svg>
    ),
    link,
  };
});

let iobj = {};
professionalDetails.forEach(({ alt, backgroundColor }) => {
  iobj[alt] = { backgroundColor };
});

const useStyles = makeStyles((theme) => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    // paddingBottom: theme.spacing(10),
  },
  subtitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  avatar: {
    height: theme.spacing(8),
    width: theme.spacing(8),
    padding: theme.spacing(2),
  },
  ...iobj,
}));

export default function Landing() {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.cont}>
      <Grid item xs={12} lg={6} align="center">
        <img src="/memoji.png" alt="Landing" width="50%" />
      </Grid>
      <Grid item xs={12} lg={6} align="center">
        <Typography variant={mdDown ? "h4" : "h2"}>
          {landing.greeding}
          <br />
          {landing.title}
        </Typography>
        <Typography variant={mdDown ? "h5" : "h4"} component="h2" className={classes.subtitle}>
          <ReactTyped strings={landing.subtitles} typeSpeed={40} backSpeed={50} loop />
        </Typography>
        <Grid container item direction="row" spacing={2} justifyContent="center">
          {professionalDetails.map(({ alt, icon, link }, i) => (
            <Grid item key={i}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Zoom in={true} style={{ transitionDelay: `${100 * i}ms` }}>
                  <Tooltip title={alt} placement="top">
                    <Avatar variant="rounded" className={clsx([classes.avatar, classes[alt]])}>
                      {icon}
                    </Avatar>
                  </Tooltip>
                </Zoom>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* <Hidden mdDown>
                <Fade in={true} style={{ transitionDelay: '100ms' }}> */}

      {/* </Fade>
            </Hidden> */}
    </Grid>
  );
}
