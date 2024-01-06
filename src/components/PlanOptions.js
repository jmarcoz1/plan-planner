import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const PlanOptions = (props) => {
  const planOptions = props.planOptions;
  const planIndex = props.planIndex;

  const handleClick = (url) => {
    // console.log({planOptions})
    window.location.href = url;
  };

  return (
    <Box>
      {'url' in planOptions ? (
        <Button onClick={() => handleClick(planOptions.url)}>Go to URL</Button>
      ) : (
        Object.entries(planOptions).map(([key, value]) => (
          <Button key={key} onClick={() => handleClick(value.url)}>
            {key}
          </Button>
        ))
      )}
    </Box>
  );
};

export default PlanOptions;
