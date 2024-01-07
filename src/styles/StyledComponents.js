// StyledComponents.js
import { styled } from '@mui/system';
import { Card as MuiCard, Button as MuiButton} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material'

const mainTheme = createTheme({
    palette: {
      blues: {
        main: '#5B9A8B',
        light: '#9EC8B9',
        dark: '#1B4242',
        background: '#092635',
        contrastText: '#F7E987',
      },
    },
    typography: {
      fontFamily: 'Fjalla One',
      // fontFamily: 'Space Grotesk',
      // fontFamily: 'Work+Sans',
      // fontFamily: 'Syne',
      // fontFamily: 'DM+Sans',
    }
  })

export const Card = styled(MuiCard)(({ theme }) => ({
  width: '80%',
  margin: 'auto',
  py: 1,
  color: theme.palette.blues.main,
  mt: 1,
  borderRadius: '16px',
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.blues.contrastText,
  backgroundColor: theme.palette.blues.dark
}));
