import { ITheme } from "../../interfaces/Theme.interface";

type anchor = "left";
type HandleDrawerClose = (arg: any) => void;
type HandleDrawerOpen = (arg: any) => void;
export interface IAdmin {
  open: boolean;
  theme: ITheme;
  anchor: anchor;
  classes: any;
  handleDrawerClose: HandleDrawerClose;
  handleDrawerOpen: HandleDrawerOpen;
  // auth0 auth service object
  auth: any;
  // React-router props
  browserProps?: any;
}
