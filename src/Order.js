import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import { blueGrey } from '@material-ui/core/colors';
import Backdrop from '@material-ui/core/Backdrop';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimelineIcon from '@material-ui/icons/Timeline';
import Avatar from '@material-ui/core/Avatar';
import OrderTimeline from "./OrderTimeline";

const useStyles = makeStyles((theme) =>({
    root: {
        minWidth: '90%',
        marginBottom: '9px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardHeader: {
        backgroundColor: blueGrey[100],
    },
    inlineDisplay: {
        display: "inline-flex"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function Order() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
        <Card className={classes.root} variant="outlined">
            <CardHeader
                title="SHIPPED"
                subheader="ORDERED ON 10 July 2020"
                className={classes.cardHeader}
            />
            <Divider />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Expected Delivery By 15 July 2020
                </Typography>
                <div>
                <Avatar variant="rounded" src="/book.jpg" className={classes.inlineDisplay}/>
                <Typography variant="h5" component="h2" className={classes.inlineDisplay}>
                    &nbsp;&nbsp;Title A by Ravi
                </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <Button title="Timeline" color="default" variant="text" onClick={handleToggle} >
                    <TimelineIcon />
                    &nbsp;Track
                </Button>
            </CardActions>
        </Card>

            <Card className={classes.root} variant="outlined">
                <CardHeader
                    title="DELIVERED"
                    subheader="ORDERED ON 03 July 2020"
                    className={classes.cardHeader}
                />
                <Divider />
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Delivered to customer on 06 July 2020
                    </Typography>
                    <div>
                        <Avatar variant="rounded" src="/book.jpg" className={classes.inlineDisplay}/>
                        <Typography variant="h5" component="h2" className={classes.inlineDisplay}>
                            &nbsp;&nbsp;Title J by Leo
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing>
                    <Button title="Timeline" color="default" variant="text" >
                        <AssessmentIcon />
                        &nbsp;Details
                    </Button>
                </CardActions>
            </Card>

            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <OrderTimeline />
            </Backdrop>

        </div>
    );
}
