import * as React from "react";
import { HashRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";
// Custom Imports
import AppRouter from "./router/AppRouter";
// import DrawerComponent from "./router/DrawerComponent";
// import Header from "./router/Header";
import { Styles } from "./AppStyles";
import { IProps } from "./App.interface";
import "./App.css";

// drawer test
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/ListItem";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { NavigationList } from "./router/NavigationList";

// header test
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Menu as MenuIcon } from "@material-ui/icons";

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
    const { classes, theme } = this.props;
    // tslint:disable-next-line:no-console
    return (
      <div className="App">
        <HashRouter>
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
                    {theme.direction === "rtl" ? (
                      <ChevronRight />
                    ) : (
                      <ChevronLeft />
                    )}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  <NavigationList />
                </List>
              </Drawer>
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
                <AppRouter />
              </div>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(
  ({ theme, classes }: IProps) => <App theme={theme} classes={classes} />
);
