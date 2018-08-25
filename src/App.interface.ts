import { WithStyles } from "@material-ui/core";
import { Styles } from "./AppStyles";

export interface IProps extends WithStyles<typeof Styles> {
  classes: any;
}
