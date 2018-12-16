import * as React from "react";
import { Route, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { ArrowForwardIos } from "@material-ui/icons";
import "./breadcrumbs.css";

export const BreadCrumbs = ({ children }: any) =>
  children && children({ BreadCrumbList });

const BreadCrumbList = () => (
  <Paper className="breadcrumbs">
    <ul className="bread-crumb-list">
      <Route path="/:path" component={BreadCrumbsItem} />
    </ul>
  </Paper>
);

const BreadCrumbsItem = ({ match, location: { pathname }, ...rest }: any) =>
  match ? (
    <React.Fragment>
      {pathname.split("/").map((route: string, i: number) => (
        <li key={i} className={match.isExact ? "breadcrumb-active" : undefined}>
          <Link to={`/${route}` === match.url ? match.url : route || ""}>
            <Chip
              className="breadcrumb-chip"
              label={
                <React.Fragment>
                  {route === "" ? "Home" : route} <ArrowForwardIos />
                </React.Fragment>
              }
            />
          </Link>
        </li>
      ))}

      <Route path={`${pathname}/:path`} render={() => <BreadCrumbsItem />} />
    </React.Fragment>
  ) : (
    <React.Fragment />
  );
