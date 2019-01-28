import axios from 'axios';

export const getNews = async () => {
  try{
    const { data } = await axios.get('/news');
    return data;
  } catch(error){
    return {};
  }
};

export const getWtf = () => async () => {
  try{
    const { data } = await axios.get('/news');
    return data;
  } catch(error){
    return {};
  }
};
