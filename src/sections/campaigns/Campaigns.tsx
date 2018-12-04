import * as React from "react";
import Fetch from "../../services/Fetch";

// todo :
// add user context && campaign service/context to make fetch call.
export default class Campaigns extends React.Component {
  public state: any = {};

  public render() {
    return (
      <Fetch url="http://127.0.0.1/about">
        {response => (
          console.log("Campaign Fetch: ", response),
          <div>campaigns component</div>
        )}
      </Fetch>
    );
  }
}
