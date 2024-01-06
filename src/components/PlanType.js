import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography, Stack, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PlanDetails from './PlanDetails';

const PlanType = (props) => {
  const planData = props.planData

  const handleSubmit = () => {
    Object.entries(planData).map(([key, value]) => {
      console.log({value})
    })
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
      fontFamily: 'DM+Sans',
    }
  })

  return (
    <ThemeProvider theme={mainTheme}>
      <Card sx={{ width: '70%', margin: 'auto', py: 1, color: "app", mt: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }} >
          <CardContent sx={{ textAlign: 'center' }}>
            {Object.entries(planData).map(([key, value]) => {
              return (
                <Box>
                  <Typography variant="h5" >{key}</Typography>
                  <PlanDetails planDetails={value} planIndex={key}/>
                </Box>
              )
            })}
            <Button sx={{ margin: 'auto', color: "app" }} variant="contained" onClick={handleSubmit}>
              Enviar
            </Button>
          </CardContent>
        </Box>
      </Card>
    </ThemeProvider>
  )
}

export default PlanType;
