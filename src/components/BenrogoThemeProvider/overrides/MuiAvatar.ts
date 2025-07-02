import { Components, Theme } from '@mui/material/styles';

const MuiAvatar: Components<Theme>['MuiAvatar'] = {
  styleOverrides: {
    root: {
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
  },
};

export default MuiAvatar;