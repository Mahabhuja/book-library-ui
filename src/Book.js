import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: '50%',
        paddingTop: '50%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Book(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleAddToCartClick = () => {

    };

    return (
        <Card className={classes.root} variant="elevation">
            <CardHeader
                title={props.bookTitle}
                subheader={props.author}
            />
            <CardMedia
                className={classes.media}
                image="/book.jpg"
                title="Book Title"
            />
            <CardContent>
                <Typography color="textPrimary">
                    {props.genre}
                </Typography>
                <Typography color="textSecondary">
                    ISDN: {props.isdn}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/*<IconButton aria-label="add to favorites" title="Add to favourites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" title="share">
                    <ShareIcon />
                </IconButton>*/}
                <IconButton title="Add to cart"
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleAddToCartClick}
                    aria-expanded={expanded}>
                    <AddShoppingCartIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
