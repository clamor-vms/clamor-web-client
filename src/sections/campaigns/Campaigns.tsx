import * as React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import CampaignService from "../../services/CampaignService";
import "./campaigns.css";

// todo :
// Add tabs & local navigation to section. add campaign form & card display for created campaigns.
// add ability to edit & delete created campaigns.
export default class Campaigns extends React.Component<any, any> {
  public state: any = {
    activeTab: 0
  };

  public handleChange = (event: any, activeTab: number) =>
    this.setState({ activeTab });

  public render() {
    const { activeTab } = this.state;
    return (
      <CampaignService route="type" method="GET">
        {(response: any) => (
          console.log("fetch response: ", response),
          (
            <React.Fragment>
              (TODO: BREADCRUMBS COMPONENT)
              <Paper square={true}>
                <Tabs
                  value={activeTab}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={this.handleChange}
                >
                  <Tab label="Dashboard" />
                  <Tab label="Campaigns" />
                  <Tab label="Create" />
                </Tabs>
              </Paper>
              <div className="campaign-holder">
                {activeTab === 0 && (
                  <React.Fragment>
                    Dashboard (Dashboard items with campaign metrics)
                  </React.Fragment>
                )}
                {activeTab === 1 && (
                  <React.Fragment>
                    Campaigns list (Table view of all campaigns)
                  </React.Fragment>
                )}
                {activeTab === 2 && (
                  <React.Fragment>
                    Create Campaign (Form to create a new campaign)
                  </React.Fragment>
                )}
              </div>
            </React.Fragment>
          )
        )}
      </CampaignService>
    );
  }
}
