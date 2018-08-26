import * as React from "react";
import { Route, Switch } from "react-router-dom";

const Home = () => <div>Home Route</div>;
const Operations = () => <div>Operations Route</div>;
const Campaigns = () => <div>Campaigns Route</div>;
const Tasks = () => <div>Tasks Route</div>;
const Settings = () => <div>Settings Route</div>;

export const AppRouter: React.StatelessComponent<{}> = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/operations" component={Operations} />
      <Route path="/campaigns" component={Campaigns} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </div>
);

export default AppRouter;
