import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // replace with your actual API URL

export const getActivities = async () => {
  const response = axios.get(`${API_URL}/activities`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

  return response.data;
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