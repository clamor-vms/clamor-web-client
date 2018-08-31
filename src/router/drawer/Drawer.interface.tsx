import { ITheme } from "../../interfaces/Theme.interface";

type anchor = "left" | "bottom" | "right" | undefined;
type HandleDrawerClose = (arg: any) => void;
export interface IDrawerComponent {
  open: boolean;
  theme: ITheme;
  anchor: anchor;
  classes: any;
  handleDrawerClose: HandleDrawerClose;
}
