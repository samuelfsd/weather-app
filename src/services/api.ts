import axios from 'axios';

export const api = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=7ea8f56b1244666e614be40f5604b2e6`,
});
