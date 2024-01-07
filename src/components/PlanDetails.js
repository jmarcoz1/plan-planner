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
    <Card sx={{ width: '80%', margin: '0 auto', py: 1, borderRadius: '16px', backgroundColor: '#9EC8B9' }}>
      <CardContent>
        {Object.entries(planDetails).map(([key, value]) => {
          return (
            <Box>
              <Typography variant="h6" >{key}</Typography>
              <PlanOptions planOptions={value} planIndex={key} />
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default PlanDetails