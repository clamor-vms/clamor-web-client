import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Campaigns from "@/sections/campaigns/Campaigns";
import { BreadCrumbs } from "./BreadCrumbs";
import "./router.css";

const Home = () => <div>Home Route</div>;
const Contacts = () => <div>Contacts Route</div>;
const Settings = () => <div>Settings Route</div>;

export const Router = (props: any) => (
  <BreadCrumbs>
    {({ BreadCrumbList }: any) => (
      <div className="clamor-content">
        <Switch>
          <Route path="/" render={() => <Home />} exact={true} />
          <Route
            title="campaigns"
            path="/campaigns"
            render={() => <Campaigns BreadCrumbList={BreadCrumbList} />}
          />
          <Route
            title="contacts"
            path="/contacts"
            render={() => <Contacts />}
          />
          <Route
            title="settings"
            path="/settings"
            render={() => <Settings />}
          />
        </Switch>
      </div>
    )}
  </BreadCrumbs>
);

export default Router;
