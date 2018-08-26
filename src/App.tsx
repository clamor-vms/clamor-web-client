import * as React from "react";
import { HashRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";
// Custom Imports
import AppRouter from "./router/AppRouter";
import DrawerComponent from "./router/DrawerComponent";
import Header from "./router/Header";
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
    const { anchor, open } = this.state;
    const { classes, theme } = this.props;
    // tslint:disable-next-line:no-console
    return (
      <HashRouter>
        <div className="">
          <div className={classes.root}>
            <div className={classes.appFrame}>
              <Header
                theme={theme}
                open={open}
                anchor={anchor}
                classes={classes}
                handleDrawerOpen={this.handleDrawerOpen}
              />
              <DrawerComponent
                open={open}
                theme={theme}
                anchor={anchor}
                classes={classes}
                handleDrawerClose={this.handleDrawerClose}
              />
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
        </div>
      </HashRouter>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(
  ({ theme, classes }: IProps) => <App theme={theme} classes={classes} />
);
