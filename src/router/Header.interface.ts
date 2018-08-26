type HandleDrawerOpen = (arg: any) => void;
export interface IHeader {
  open: boolean;
  theme: any;
  anchor: string;
  classes: any;
  handleDrawerOpen: HandleDrawerOpen;
}
