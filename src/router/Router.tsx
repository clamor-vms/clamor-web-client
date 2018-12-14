import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Campaigns from "@/sections/campaigns/Campaigns";
import "./router.css";

const Home = () => <div>Home Route</div>;
const Contacts = () => <div>Contacts Route</div>;
const Settings = () => <div>Settings Route</div>;

export const AppRouter: React.StatelessComponent<{}> = () => (
  <div className="clamor-content">
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/campaigns" component={Campaigns} exact={true} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </div>
);

export default AppRouter;
