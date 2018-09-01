import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Operations, { Operation } from "@/containers/operations/index";

const Home = () => <div>Home Route</div>;
const Contacts = () => <div>Contacts Route</div>;
const Settings = () => <div>Settings Route</div>;

export const AppRouter: React.StatelessComponent<{}> = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route exact={true} path="/operations" component={Operations} />
      <Route exact={true} path="/operations/:id" component={Operation} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </div>
);

export default AppRouter;
