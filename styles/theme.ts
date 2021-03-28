import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

// A theme with custom primary and secondary color.
// It's optional.

const theme = createMuiTheme({
  drawerWidth: 240,
  palette: {
    primary: {
      main: "#20cbcb",
      contrastText: "#000",
    },
    typography: {
      useNextVariants: true,
    },
  },
} as any);
export type Theme = typeof theme;
export default theme;


