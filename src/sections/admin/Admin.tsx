import * as React from "react";
import classNames from "classnames";
// local imports
import AppRouter from "../../router/Router";
import DrawerComponent from "../../router/drawer/DrawerComponent";
import Header from "../../router/header/Header";
import { IAdmin } from "./Admin.interface";

export default class Admin extends React.Component<IAdmin, any> {
  public logout = () => console.log("logging out..");
  public render() {
    const {
      classes,
      theme,
      open,
      anchor,
      handleDrawerClose,
      handleDrawerOpen
    } = this.props;
    return (
      <div className="">
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <Header
              theme={theme}
              open={open}
              anchor={anchor}
              classes={classes}
              handleDrawerOpen={handleDrawerOpen}
            />
            <DrawerComponent
              open={open}
              theme={theme}
              anchor={anchor}
              classes={classes}
              handleDrawerClose={handleDrawerClose}
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
              style={{
                padding: 0
              }}
            >
              {/* <div className={classes.drawerHeader} /> */}
              <AppRouter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
