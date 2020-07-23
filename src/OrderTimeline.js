import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import { blueGrey } from '@material-ui/core/colors';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '90%',
        minHeight: '90vh'
    },
    title: {
        fontSize: 14,
    },
    largerTitle: {
        fontSize: 24,
    },
    chipSize: {
       maxWidth: '300px'
    },
    largeTitle: {
        fontSize: 40,
    },
    pos: {
        marginBottom: 12,
    },
    rightMargin: {
      marginRight: '10vw',
        position: 'relative'
    },
    cardHeader: {
        backgroundColor: blueGrey[100],
    },
    pullDown: {
        bottom: 0
    },
    leftAlign: {
        left: 0,
        display: "inline-flex"
    },
    paper: {
        padding: '6px 16px',
        minWidth: '40vw'
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

function preventDefault(event) {
    event.preventDefault();
}

export default function OrderTimeline() {
    const classes = useStyles();
    const msg = <Typography className={classes.title} color="textPrimary" gutterBottom>
        We do not have further details on your delivery at this time. Please check back later
    </Typography>;
    return (
        <div className={classes.root}>
            <Card className={classes.root} variant="outlined">
                <CardHeader
                    subheader={
                        <div>
                            <Typography className={classes.title} color="primary" gutterBottom>
                                Order
                            </Typography>
                            <Typography className={classes.title} color="primary" gutterBottom>
                            Completed On:
                            </Typography>
                            <Typography className={classes.largeTitle} color="primary" gutterBottom>
                                10th
                            </Typography>
                            <Typography className={classes.title} color="primary" gutterBottom>
                                July 2020
                            </Typography>
                        </div>
                    }
                    action={
                        <div className={classes.rightMargin}>
                            <Typography className={classes.title} color="primary" gutterBottom>
                                Order Status
                            </Typography>
                            <Typography className={classes.title} color="primary" gutterBottom>
                                Complete
                            </Typography>
                            <Typography className={classes.largerTitle} color="primary" gutterBottom>
                                &nbsp;
                            </Typography>
                            <Typography className={classes.title} color="primary" gutterBottom>
                                Order Number:
                            </Typography>
                            <Typography className={classes.title} color="primary" gutterBottom>
                                1-18287328118
                            </Typography>
                        </div>
                    }
                />
                <Divider />
                <CardContent className={classes.leftAlign}>
                    <Timeline align="left" className={classes.leftAlign}>
                        <TimelineItem>
                            <TimelineSeparator>
                                    <CheckCircleIcon color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={0} className={classes.paper}>
                                    <Typography variant="inherit">
                                        Order created
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>10 July 2020</Typography>
                                </Paper>
                                <Divider/>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <CheckCircleIcon color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={0} className={classes.paper}>
                                    <Typography variant="inherit" gutterBottom>
                                        Hardware delivery
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>Cancelled</Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Telstra Smart Modem Kit - ADSL
                                    </Typography>
                                    <Typography>
                                    <Chip variant="outlined" color="primary" label={msg} />
                                    </Typography>
                                    <Typography className={classes.title} color="primary">
                                        <ArrowForwardIosIcon fontSize="small"/> <Link color="primary" href="#" onClick={preventDefault}>Self install instructions</Link>
                                    </Typography>
                                </Paper>
                                <Divider/>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <CheckCircleIcon color="primary" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={0} className={classes.paper}>
                                    <Typography variant="inherit">
                                        Order complete
                                    </Typography>
                                </Paper>
                                <Divider/>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </CardContent>
            </Card>

        </div>
    );
}
