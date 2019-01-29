import axios from 'axios';

const fetchApi = async (url) => {
  try{
    const { data } = await axios.get(url);
    return data;
  } catch(error){
    return {};
  }
};

export const getNews = async () => {
  const response = await fetchApi('/news');
  return response;
};

export const getWeather = async () => {
  const response = await fetchApi('/weather');
  return response;
};

export const getFinance = async () => {
  const response = await fetchApi('/finance');
  return response;
};

export const getScores = async () => {
  const response = await fetchApi('/sports');
  return response;
};

export const submitEmailForUpdates = async (email) => {
  try{
    const response = await axios.post('/subscribe', { email });
    return response;
  } catch(error){
    return {};
  }
};
