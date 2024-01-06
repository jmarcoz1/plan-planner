import PlanOptions from './PlanOptions'
import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography, Stack, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PlanDetails = (props) => {
  const planDetails = props.planDetails
  const planIndex = props.planIndex

  const handleSubmit = () => {
    console.log({planDetails})
  }

  return (
    <Card sx={{ width: '80%', margin: '0 auto', py: 2, color: "app" }}>
    <CardContent>
      <Typography variant="h5" sx={{ textAlign: 'center', py: 2 }}>test</Typography>

      {/* {planData.map((data, index) => {
        <PlanDetails planDetails={data} planIndex={index}/>
      })} */}

      <Button variant="contained" onClick={handleSubmit} sx={{ ml: "auto" }}>
        Enviar
      </Button>
    </CardContent>
  </Card>
  )
}

export default PlanDetails