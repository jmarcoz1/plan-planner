import React from 'react'
import { useState } from 'react'
import { getActivities } from '../API/API'
import { Box } from '@mui/system'
import { Button } from '../styles/StyledComponents';

const AddPlans = () => {
  const [data, setData] = useState(null)

  const handleClick = async () => {
    const information = await getActivities();
    setData(information)
    console.log({information})
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} >
      <Button variant="contained" onClick={handleClick}>get data</Button>
    </Box>
  )
}

export default AddPlans