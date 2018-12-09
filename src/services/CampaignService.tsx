import * as React from "react";
import Fetch from "./Fetch";
import { UserConsumer, IUserConsumer } from "../contexts/UserContext";

interface ICampaignService {
  // render prop children components
  children: any | undefined;
  // ideally this string will trigger different <Fetch /> Component renders, ex: <Post />, <Put />, etc..
  method?: string;
  // this string specifies which service URL to send / recieve data to.
  route?: string;
}

class CampaignService extends React.Component<ICampaignService, any> {
  // base url will probably be stored in usercontext or other more glboal area
  // this should end up as simply /campaign
  public url = "http://127.0.0.1/campaign";
  public about = "/about";
  public all = "/campaigns";

  // TODO: Hook up to CampaignContext for efficient store management
  public render() {
    const { children, route = "about" } = this.props;
    return (
      <UserConsumer>
        {({ authorization }: IUserConsumer) => (
          <Fetch
            authorization={authorization}
            url={`${this.url}${this[route]}`}
          >
            {response => children && children(response)}
          </Fetch>
        )}
      </UserConsumer>
    );
  }
}

export default CampaignService;
