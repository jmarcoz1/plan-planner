import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const PlanOptions = (props) => {
  const planOptions = props.planOptions;
  const planIndex = props.planIndex;

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {'url' in planOptions ? (
        <Button sx={{ width: '60%', margin: 'auto', mb: 1, color: '#F7E987', backgroundColor: '#092635', borderRadius: '16px' }} onClick={() => handleClick(planOptions.url)}>Ver detalles</Button>
      ) : (
        Object.entries(planOptions).map(([key, value]) => (
          <Button key={key} sx={{ width: '60%', margin: 'auto', mb: 1, color: '#F7E987', backgroundColor: '#092635', borderRadius: '16px' }} onClick={() => handleClick(value.url)}>
            {key}
          </Button>
        ))
      )}
    </Box>
  );
};

export default PlanOptions;
