// tslint:disable-next-line jsx-no-lambda
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"; // HashRouter
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
    if (!this.authService.isAuthenticated()) {
      this.authService.login();
      return (
        <div>
          <p>Redirecting to the authentication service...</p>
        </div>
      );
    }

    return (
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
  }

  public callback(history: any) {
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
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact={true}
              path="/callback"
              render={({ history }: any) => this.callback(history)}
            />
            <Route path="/" render={() => this.renderAdmin()} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(
  ({ theme, classes }: IProps) => <App theme={theme} classes={classes} />
);
