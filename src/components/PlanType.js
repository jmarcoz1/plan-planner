import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography, Stack, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PlanDetails from './PlanDetails';

const PlanType = (props) => {
  const planData = props.planData

  const handleSubmit = () => {
    console.log(planData)
  }

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

  return (
    <ThemeProvider theme={mainTheme}>
      <Card sx={{ width: '80%', margin: '0 auto', py: 2, color: "app" }}>
          <CardContent>
            <Typography variant="h5" sx={{ textAlign: 'center', py: 2 }}>test</Typography>

            {/* {planData.map((data, index) => {
              <PlanDetails planDetails={data} planIndex={index}/>
            })} */}
            {Object.entries(planData).map(([key, value]) => {
              <PlanDetails planDetails={value} planIndex={key}/>
            })}

            <Button variant="contained" onClick={handleSubmit}>
              Enviar
            </Button>
          </CardContent>
        </Card>
      </ThemeProvider>
  )
}

export default PlanType