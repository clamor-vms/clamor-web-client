import * as React from "react";
import { IFetchProps, IFetchState } from "./IFetch";
const Fragment = React.Fragment;

export default class Fetch extends React.Component<IFetchProps, IFetchState> {
  public state = {
    loading: false,
    url: this.props.url,
    params: this.props.params,
    data: {},
    errors: undefined,
    refetch: this.callFetch
  };
  public render() {
    const { state } = this;
    const { children } = this.props;
    return <Fragment>{children && children(state)}</Fragment>;
  }
  public componentDidMount() {
    this.callFetch();
  }
  public callFetch() {
    const { authorization = "AUTH_NOT_SET" } = this.props;
    const { url, params, loading } = this.state;
    if (loading) {
      return;
    }
    this.setState({ loading: true }, () => {
      fetch(url, {
        method: "GET", // *GET POST PUT DELETE
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          Authorization: authorization,
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(params) // body data type must match "Content-Type" header
      })
        .then(response => response.json())
        .then(data => {
          this.setState({ data, errors: undefined, loading: false });
        })
        .catch(err => this.setState({ errors: err, data: {}, loading: false }));
    });
  }
}
