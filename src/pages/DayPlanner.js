import React from 'react'
import { useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';

import { flattenDeep } from 'lodash';

const DayPlanner = (props) => {

  const planes = props.planes
  const [activities, setActivities] = useState(null)

  function getRandomActivity(planes, timeOfDay) {
    const activities = [];
    planes.forEach((plan) => {
      Object.values(plan).forEach((category) => {
        Object.entries(category).forEach(([activity, details]) => {
          if (details['time-of-day'] && details['time-of-day'].includes(timeOfDay)) {
            activities.push({ activity, url: details.url });
          }
          Object.values(details).forEach((subActivity) => {
            if (typeof subActivity === 'object' && subActivity['time-of-day'] && subActivity['time-of-day'].includes(timeOfDay)) {
              activities.push({ activity, url: subActivity.url });
            }
          });
        });
      });
    });
    return activities[Math.floor(Math.random() * activities.length)];
  }

  function getActivitiesForTheDay(planes) {
    const timesOfDay = ['morning', 'afternoon', 'night'];
    const selectedActivities = [];

    timesOfDay.forEach((timeOfDay) => {
      let activity;
      do {
        activity = getRandomActivity(planes, timeOfDay);
      } while (selectedActivities.find((a) => a.activity === activity.activity));
      selectedActivities.push(activity);
    });

    return selectedActivities;
  }

  const clg = () => {
    const selectedActivities = getActivitiesForTheDay(planes);
    setActivities(selectedActivities)
    console.log(selectedActivities);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} >
      <Button sx={{ margin: 'auto', color: "app", mt: 2 }} variant="contained" onClick={clg}>Plan the day</Button>

      {/* <Card sx={{ width: '70%', margin: 'auto', py: 1, color: "app.main", mt: 1 }}>
        {activities && activities.map((activity, index) => (
          <Button variant="contained" color="primary" href={activity.url} target="_blank" key={index}>
            {activity.activity}
          </Button>
        ))}
      </Card> */}
      {activities && (
        <Card sx={{ width: '80%', margin: 'auto', py: 1, color: "app", my: 2, display: "flex", flexDirection: "column", borderRadius: '16px' }}>
          {activities.map((activity, index) => (
            <Button sx={{ width: '60%', margin: 'auto', color: "app", my: 2 }} variant="contained" color="primary" href={activity.url} target="_blank" key={index}>
              {activity.activity}
            </Button>
          ))}
        </Card>
      )}
    </Box>
  )
}

export default DayPlanner
