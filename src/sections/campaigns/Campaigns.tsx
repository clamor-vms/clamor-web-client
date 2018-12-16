import * as React from "react";
import { Switch, Route, NavLink as Link, withRouter } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";
// local
import { ICampaignsState } from "./ICampaigns";
import Dashboard from "./Dashboard";
import CampaignForm from "./CampaignForm";
import CampaignService from "../../services/CampaignService";
import "./campaigns.css";

const CampaignList = () => (
  <React.Fragment>Campaigns list (Table view of all campaigns)</React.Fragment>
);

// todo :
// add ability to edit & delete created campaigns.
class Campaigns extends React.Component<any, ICampaignsState> {
  public path = this.props.match.path;
  public all = `${this.path}/all`;
  public create = `${this.path}/create`;
  public routes = {
    [this.props.match.path]: 0,
    [`${this.path}/all`]: 1,
    [`${this.path}/create`]: 2
  };

  public state: any = {
    activeTab: 0
  };

  public componentDidUpdate() {
    if (this.state.activeTab !== this.routes[this.props.location.pathname]) {
      this.setState({ activeTab: this.routes[this.props.location.pathname] });
    }
  }

  public handleChange = (event: any, activeTab: number) =>
    this.setState({ activeTab });

  public render() {
    const { BreadCrumbList } = this.props;
    const { activeTab } = this.state;
    return (
      <CampaignService route="type" method="GET">
        {(response: any) => (
          console.log(response),
          (
            <React.Fragment>
              <AppBar position="static">
                <Tabs
                  className="campaign-tabs"
                  value={activeTab}
                  onChange={this.handleChange}
                >
                  <Tab label={<Link to={this.path}>Dashboard</Link>} />
                  <Tab label={<Link to={this.all}>Campaigns</Link>} />
                  <Tab label={<Link to={this.create}>Create</Link>} />
                </Tabs>
              </AppBar>
              <BreadCrumbList />
              <div className="campaign-holder">
                <Switch>
                  <Route exact path={this.path} component={Dashboard} />
                  <Route exact path={this.all} component={CampaignList} />
                  <Route exact path={this.create} component={CampaignForm} />
                </Switch>
              </div>
            </React.Fragment>
          )
        )}
      </CampaignService>
    );
  }
}

export default withRouter(Campaigns);
