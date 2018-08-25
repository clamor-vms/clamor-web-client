import { createStyles } from "@material-ui/core";
import { ITheme } from "./AppStyles.interface";

const drawerWidth = 240;
export const Styles = ({ palette, spacing, transitions, mixins }: ITheme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appFrame: {
      height: 430,
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      width: "100%"
    },
    appBar: {
      position: "absolute",
      transition: transitions.create(["margin", "width"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitions.create(["margin", "width"], {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.enteringScreen
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
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...mixins.toolbar
    },
    content: {
      flexGrow: 1,
      backgroundColor: palette.background.default,
      padding: spacing.unit * 3,
      transition: transitions.create("margin", {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      })
    },
    "content-left": {
      marginLeft: -drawerWidth
    },
    "content-right": {
      marginRight: -drawerWidth
    },
    contentShift: {
      transition: transitions.create("margin", {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.enteringScreen
      })
    },
    "contentShift-left": {
      marginLeft: 0
    },
    "contentShift-right": {
      marginRight: 0
    }
  });
