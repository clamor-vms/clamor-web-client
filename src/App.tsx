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
import "./App.css";
import { Styles } from "./AppStyles";
import { IProps } from "./App.interface";

const flex: string = "flex";

class App extends React.Component<any, any> {
  public state: any = {
    anchor: "left",
    anchorEl: null,
    auth: true,
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
    console.log("PROPS: ", this.props);

    // Drawer creation:
    const drawer = (
      <Drawer variant="persistent" anchor={anchor} open={open} classes={{}}>
        <div className="">
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

    let before = null;
    let after = null;

    if (anchor === "left") {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classNames(classes.menuButton, open && classes.hide)}
              color="inherit"
              onClick={this.handleDrawerOpen}
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={flex}>
              Skaioskit
            </Typography>
          </Toolbar>
        </AppBar>
        {before}
        <p className="App-intro">
          {/* core app w/ router here */}
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {after}
      </div>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(
  ({ theme, classes }: IProps) => <App theme={theme} classes={classes} />
);
