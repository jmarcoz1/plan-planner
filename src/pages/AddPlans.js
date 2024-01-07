import React from 'react'
import { useState } from 'react'
import { getActivities, createActivities } from '../API/API'
import { Button, Card, TextField } from '../styles/StyledComponents';
// import { Box, TextField, Button } from '@mui/material'
import { Box } from '@mui/material'


const AddPlans = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [parentCategory, setParentCategory] = useState('')
  const [timeOfDay, setTimeOfDay] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const activity = {
      name: name,
      url: url,
      category: {
        name: parentCategory,
        subcategories: category
      },
      time_of_day: timeOfDay.split(',').map(item => item.trim())
    };
    console.log(activity)
    createActivities(activity)
  };

  return (
    <Card>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', width: '80%', margin: 'auto', my: 4, py: 1 }} noValidate autoComplete="off">
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <TextField label="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <TextField label="Parent category" value={parentCategory} onChange={(e) => setParentCategory(e.target.value)} />
        <TextField label="Time of Day" value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)} helperText="Enter values separated by commas" />
        <Button type="submit">Submit</Button>
      </Box>
    </Card>

  );
}

export default AddPlans