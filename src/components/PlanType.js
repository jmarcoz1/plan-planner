import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography, Stack, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PlanDetails from './PlanDetails';

const PlanType = (props) => {

  const planData = props.planData

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
    <Card sx={{ backgroundColor: '#5B9A8B', width: '80%', margin: 'auto', py: 1, mb: 2, borderRadius: '16px' }}>
      <Box sx={{ display: "flex", flexDirection: "column" }} >
        <CardContent sx={{ textAlign: 'center' }}>
          {Object.entries(planData).map(([key, value]) => {
            return (
              <Box>
                <Typography variant="h5" sx={{ mb: 2 }}>{key}</Typography>
                <PlanDetails planDetails={value} planIndex={key} />
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default PlanType;
