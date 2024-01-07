import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // replace with your actual API URL

function parseData(apiData) {
  const parsedData = [];

  // Group activities by category
  const activitiesByCategory = apiData.reduce((acc, activity) => {
      if (!acc[activity.category.name]) {
          acc[activity.category.name] = [];
      }
      acc[activity.category.name].push(activity);
      return acc;
  }, {});

  // Convert each category into the desired format
  for (const [categoryName, activities] of Object.entries(activitiesByCategory)) {
      const category = {};
      category[categoryName] = activities.reduce((acc, activity) => {
          acc[activity.name] = {
              "url": activity.url,
              "time-of-day": activity.time_of_day
          };
          return acc;
      }, {});
      parsedData.push(category);
  }

  return parsedData;
}

export const getActivities = async () => {
  const response = axios.get(`${API_URL}/activities/`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  
  // const parsedData = parseData(response.data);
  return response.data
}

export const createActivities = async (activityData) => {
  const response = await axios.post(`${API_URL}/activities/`, activityData)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

  return response.data
}