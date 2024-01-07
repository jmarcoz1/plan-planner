import React from 'react'
import PlanType from './PlanType'
import { createTheme, ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box';

const Plans = (props) => {
  const planes = props.planes

  const mainTheme = createTheme({
    palette: {
      app: {
        main: '#D64933',
        light: '#976968', // grey-red
        dark: '#3A001E', // brown-red
        contrastText: '#FFF7F3', // beige
      },
    },
    typography: {
      // fontFamily: 'Fjalla One',
      // fontFamily: 'Space Grotesk',
      // fontFamily: 'Work+Sans',
      // fontFamily: 'Syne',
      fontFamily: 'DM+Sans',
    }
  })

  // const poem = createTheme({
  //   palette: {
  //     blues: {
  //       main: '#F7E987',
  //       light: '#9EC8B9',
  //       dark: '#1B4242',
  //       contrastText: '#5B9A8B',
  //     },
  //   },
  //   typography: {
  //     fontFamily: 'Cormorant Garamond',
  //   }
  // })

  return (
    <ThemeProvider theme={mainTheme}>
      <Box sx={{ height: '100vh' }}>
        {planes.map((activityType, index) => (
          <PlanType key={index} planData={activityType} />
        ))}
      </Box>
    </ThemeProvider>
  )
}

export default Plans