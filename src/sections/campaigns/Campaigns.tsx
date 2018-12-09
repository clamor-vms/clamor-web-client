import * as React from "react";
import CampaignService from "../../services/CampaignService";

// todo :
// add user context && campaign service/context to make fetch call.
export default class Campaigns extends React.Component<any, any> {
  public state: any = {};

  public render() {
    return (
      <CampaignService route="about" method="GET">
        {(response: any) => (
          console.log("Campaign Fetch: ", response),
          <div>Campaigns component</div>
        )}
      </CampaignService>
    );
  }
}
