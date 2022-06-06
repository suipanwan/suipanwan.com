import { Avatar, Fade, Grid, Hidden, makeStyles, Tooltip, Typography, useMediaQuery, useTheme, Zoom } from "@material-ui/core";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  chip: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

export default function Timeline() {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const textAlignRight = mdDown ? "left" : "right";
  const itemAlignCenter = mdDown ? "center" : "stretch";
  
  return (
    <Grid direction="column" container alignItems={itemAlignCenter} spacing={10} className={classes.cont}>
      <Grid item>
        <Typography variant="h2" gutterBottom align="center">
          Experience
        </Typography>
      </Grid>
      <Grid item>
        <VerticalTimeline lineColor={'grey'}>
          <VerticalTimelineElement
            contentStyle={{ background: 'inherit', color: 'inherit', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '0px solid' }}
            date="2021 - 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
            style={{ boxShadow: 'none' }}
            position='left'
          >
            <div style={{ textAlign: textAlignRight }}>
              <h3 className="vertical-timeline-element-title">Hong Kong Baptist University</h3>
              <h4 className="vertical-timeline-element-subtitle">MSc in Data Analytics and Artificial Intelligence</h4>
              <p>Graduate</p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'inherit', color: 'inherit', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '0px solid' }}
            date="2019 - 2021"
            iconStyle={{ background: 'rgb(222, 75, 65)', color: '#fff' }}
            icon={<WorkIcon />}
            style={{ boxShadow: 'none' }}
            position='right'
          >
            <h3 className="vertical-timeline-element-title">Hong Kong Economic Times</h3>
            <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
            <br />
            <div className={classes.chip}>
              <Chip label='CodeIgniter' />
              <Chip label='Vue.js' />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'inherit', color: 'inherit', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '0px solid' }}
            date="2017 - 2019"
            iconStyle={{ background: 'rgb(222, 75, 65)', color: '#fff' }}
            icon={<WorkIcon />}
            style={{ boxShadow: 'none' }}
            position='right'
          >
            <h3 className="vertical-timeline-element-title">mSolution Consultants Limited</h3>
            <h4 className="vertical-timeline-element-subtitle">Developer</h4>
            <br />
            <div className={classes.chip}>
              <Chip label='PHP' />
              <Chip label='Oracle APEX' />
              <Chip label='Oracle DB' />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'inherit', color: 'inherit', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '0px solid' }}
            date="2013 - 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
            style={{ boxShadow: 'none' }}
            position='left'
          >
            <div style={{ textAlign: textAlignRight }}>
              <h3 className="vertical-timeline-element-title">The Hong Kong Polytechnic University</h3>
              <h4 className="vertical-timeline-element-subtitle">BSc (Hons) in Information Technology</h4>
              <p>Graduate</p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Grid>
    </Grid>
  )
}