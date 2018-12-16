import * as React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
// import HowToVoteIcon from "@material-ui/icons/HowToVote";
import PeopleIcon from "@material-ui/icons/People";
import BusinessIcon from "@material-ui/icons/Business";
import HomeIcon from "@material-ui/icons/Home";

export const NavigationList = () => (
  <div>
    <NavLink to="/">
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </NavLink>

    <NavLink to="/campaigns">
      <ListItem button={true}>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Campaigns" />
      </ListItem>
    </NavLink>

    <NavLink to="/contacts">
      <ListItem button={true}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
    </NavLink>

    <NavLink to="/settings">
      <ListItem button={true}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </NavLink>
  </div>
);
