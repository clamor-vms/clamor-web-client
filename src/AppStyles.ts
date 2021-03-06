import { createStyles } from "@material-ui/core";
import { ITheme } from "./interfaces/Theme.interface";

const drawerWidth = 240;
export const Styles = (theme: ITheme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appFrame: {
      // height: 430,
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      width: "100%"
    },
    appBar: {
      // position: "relative",
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    "appBarShift-left": {
      marginLeft: drawerWidth
    },
    "appBarShift-right": {
      marginRight: drawerWidth
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: "none"
    },
    drawerPaper: {
      position: "relative",
      height: "100vmin",
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    content: {
      // flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    "content-left": {
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    "contentShift-left": {
      marginLeft: 0
    },
    "contentShift-right": {
      marginRight: 0
    }
  });
