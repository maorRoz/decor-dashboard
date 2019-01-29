import axios from 'axios';

export const getNews = async () => {
  try{
    const { data } = await axios.get('/news');
    return data;
  } catch(error){
    return {};
  }
};

export const getScores = async () => {
  try{
    const { data } = await axios.get('/sports');
    return data;
  } catch(error){
    return {};
  }
};

export const submitEmailForUpdates = async (email) => {
  try{
    const response = await axios.post('/subscribe', { email });
    return response;
  } catch(error){
    return {};
  }
};
