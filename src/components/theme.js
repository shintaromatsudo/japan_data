import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

export const theme = createMuiTheme({
  palette: {
    type: 'dark', // ベースのテーマ lightかdarkか
    primary: pink, // primaryのカラー
  },
  typography: {
    useNextVariants: true,
  },
});
