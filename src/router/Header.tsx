import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Menu as MenuIcon } from "@material-ui/icons";
import classNames from "classnames";
// Custom Imports
import { IHeader } from "./Header.interface";

export const Header = ({
  anchor,
  classes,
  handleDrawerOpen,
  open
}: IHeader) => (
  // tslint:disable-next-line:no-console
  console.log(classes, open, anchor),
  (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open,
        [classes[`appBarShift-${anchor}`]]: open
      })}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap={true}>
          Skaioskit
        </Typography>
      </Toolbar>
    </AppBar>
  )
);

export default Header;
// export default withStyles(Styles, { withTheme: true })(
//   ({ theme, classes, anchor, handleDrawerOpen }: IHeader) => (
//     <Header
//       theme={theme}
//       anchor={anchor}
//       classes={classes}
//       handleDrawerOpen={handleDrawerOpen}
//     />
//   )
// );
