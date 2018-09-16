// tslint:disable-next-line jsx-no-lambda
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
// Custom Imports
import AuthService from "./auth/AuthService";
import Admin from "./containers/admin/Admin";
import { Styles } from "./AppStyles";
import { IProps } from "./App.interface";
import "./App.css";

class App extends React.Component<any, any> {
  public authService = new AuthService();
  public state: any = {
    anchor: "left",
    open: false
  };

  public renderAdmin() {
    const { anchor, open } = this.state;
    const { classes, theme } = this.props;
    let resultComponent = (
      <Admin
        anchor={anchor}
        open={open}
        classes={classes}
        theme={theme}
        handleDrawerOpen={this.handleDrawerOpen}
        handleDrawerClose={this.handleDrawerClose}
        auth={this.authService}
      />
    );

    if (!this.authService.isAuthenticated()) {
      this.authService.login();
      resultComponent = (
        <div>
          <p>Redirecting to the authentication service...</p>
        </div>
      );
    }

    return resultComponent;
  }

  public startSession(history: any) {
    this.authService.handleAuthentication(history);
    return (
      <div>
        <p>Starting session...</p>
      </div>
    );
  }

  public handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  public handleDrawerClose = () => {
    this.setState({ open: false });
  };

  public render() {
    return (
      <HashRouter>
        <div>
          {this.renderAdmin()}
          <Switch>
            <Route
              path="/startSession"
              render={({ history }: any) => this.startSession(history)}
            />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(
  ({ theme, classes }: IProps) => <App theme={theme} classes={classes} />
);
