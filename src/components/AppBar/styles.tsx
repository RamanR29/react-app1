import { SxProps, Theme } from '@mui/material';

export const styles = {
  boxRoot: {
    display: 'flex',
    color: '#FFFFFF',
  } as SxProps<Theme>,

  header: {
    backgroundColor: '#4708d9ff',
    color: '#FFFFFF',
  } as SxProps<Theme>,

  toolbarLogo: {
    flexGrow: 1,
    display: { xs: 'none', sm: 'block' },
  } as SxProps<Theme>,

  navButtonBox: {
    display: { xs: 'none', sm: 'block' },
  } as SxProps<Theme>,

  IconButton: {
    mr: 2,
    display: { sm: 'none' },
  } as SxProps<Theme>,

  Button: (isActive: boolean): SxProps<Theme> => ({
    color: 'white',
    height: '50px',
    backgroundColor: isActive ? '#422f6eff' : 'transparent',
    fontWeight: isActive ? 'bold' : 'normal',
  }),

  main: {
    width: '100%',
    paddingTop: '48px',
  } as SxProps<Theme>,
};
