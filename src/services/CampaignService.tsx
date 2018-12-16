import * as React from "react";
import Fetch from "./Fetch";
import { UserConsumer, IUserConsumer } from "../contexts/UserContext";

interface ICampaignService {
  // render prop children components
  children: any | undefined;

  method?: string;
  // this string specifies which service URL to send / recieve data to.
  route?: string;
}

class CampaignService extends React.Component<ICampaignService, any> {
  // base url will probably be stored in usercontext or other more glboal area
  // this should end up as simply /campaign
  public url = "http://127.0.0.1/campaign";
  public about = "/about";
  public all = "/campaign";
  public type = "/type";

  public state = {
    route: this.props.route || this.about
  };

  public getAbout = () => this.setState({ route: this.about });
  public getCampaigns = () => this.setState({ route: this.all });
  public getTypes = () => this.setState({ route: this.type });
  // todo, mutations & parameters
  public createCampaign = () => {};
  public updateCampaign = () => {};
  public deleteCampaign = () => {};

  // TODO: Hook up to CampaignContext for efficient store management
  public render() {
    const { children, method = "GET" } = this.props;
    const { route } = this.state;
    return (
      <UserConsumer>
        {({ authorization }: IUserConsumer) => (
          <Fetch
            method={method}
            authorization={authorization}
            url={`${this.url}${this[route]}`}
          >
            {state => children && children(state)}
          </Fetch>
        )}
      </UserConsumer>
    );
  }
}

export default CampaignService;
