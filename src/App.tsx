import AppBar from "@material-ui/core/AppBar";
import classNames from "classnames";
import Divider from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import { NaviationList } from "./components/TitleList";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  Menu as MenuIcon,
  ChevronLeft,
  ChevronRight
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core";
import * as React from "react";
import { Styles } from "./AppStyles";
import { IProps } from "./App.interface";
import "./App.css";

class App extends React.Component<any, any> {
  public state: any = {
    anchor: "left",
    open: false
  };

  public handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  public handleDrawerClose = () => {
    this.setState({ open: false });
  };

  public render() {
    const { anchor, open } = this.state; // auth, anchorEl,
    const { theme, classes } = this.props;
    // tslint:disable-next-line:no-console
    console.log("PROPS: ", this.props, theme.direction);

    // Drawer creation:
    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NaviationList />
        </List>
      </Drawer>
    );

    return (
      <div className="App">
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    open && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap={true}>
                  Skaioskit
                </Typography>
              </Toolbar>
            </AppBar>
            {drawer}
            <div
              className={classNames(
                classes.content,
                classes[`content-${anchor}`],
                {
                  [classes.contentShift]: open,
                  [classes[`contentShift-${anchor}`]]: open
                }
              )}
            >
              <div className={classes.drawerHeader} />
              {/* Core app w/ Routes */}
              <Typography>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +
                  " " +
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(
  ({ theme, classes }: IProps) => <App theme={theme} classes={classes} />
);
