import PlanOptions from './PlanOptions'
import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography, Stack, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PlanDetails = (props) => {
  const planDetails = props.planDetails
  const planIndex = props.planIndex

  const handleSubmit = () => {
    console.log({ planDetails })
  }

  return (
    <Card sx={{ width: '80%', margin: '0 auto', py: 1, color: "app", borderRadius: '16px' }}>
      <CardContent>

        {Object.entries(planDetails).map(([key, value]) => {
          return (
            <Box>
              <Typography variant="h5" sx={{ py: 1 }}>{key}</Typography>
              <PlanOptions planOptions={value} planIndex={key} />
            </Box>
          )
        })}

        <Button variant="contained" onClick={handleSubmit} sx={{ ml: "auto" }}>
          Detalles
        </Button>
      </CardContent>
    </Card>
  )
}

export default PlanDetails