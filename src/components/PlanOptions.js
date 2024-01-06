import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const PlanOptions = (props) => {
  const planOptions = props.planOptions;
  const planIndex = props.planIndex;

  const handleClick = (url) => {
    console.log(url)
    window.location.href = url;
  };

  return (
    <Box>
      {typeof planOptions === 'string' ? (
        <Button onClick={() => handleClick(planOptions)}>Go to URL</Button>
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
