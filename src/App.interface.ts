import { WithStyles, withStyles } from "@material-ui/core";
import { Styles } from "./AppStyles";

export interface IProps extends WithStyles<typeof Styles> {
  theme: any;
  classes: any;
}
