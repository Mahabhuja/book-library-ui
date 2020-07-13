import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon title="Catalogue">
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Catalogue" />
        </ListItem>
        <ListItem button>
            <ListItemIcon title="Orders">
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListItem button>
            <ListItemIcon title="Profile">
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
            <ListItemIcon title="Settings">
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
);

export const books = (
  [
      createBookItems('Title A', 'Ravi', 'Fiction', 'ISBN-1254'),
      createBookItems('Title B', 'Ravi', 'Fiction', 'AAA-567'),
      createBookItems('Title C', 'Ravi', 'Thriller', 'AZA-888'),
      createBookItems('Title D', 'Amit', 'Horror', 'TTY-9098'),
      createBookItems('Title E', 'Amit', 'Thriller', 'AAA-6766'),
      createBookItems('Title F', 'Amit', 'Thriller', 'BBQ-56473'),
      createBookItems('Title G', 'Leo', 'Horror', 'KQA-9090'),
      createBookItems('Title H', 'Leo', 'Biography', 'WWW-IM-007'),
      createBookItems('Title I', 'Leo', 'Biography', 'UR-GRT-123'),
      createBookItems('Title J', 'Leo', 'Horror', 'ALL-IS-999'),
  ]
);

function createBookItems (title, author, genre, isdn) {
    return {title: title, author: author, genre: genre, isdn: isdn};
}