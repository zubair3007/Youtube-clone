import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';
  
const options = {
  method: 'GET',
//   url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '11022d6b1dmsh78a92c849dfee1dp1617e0jsn9ab71ce8106c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;

}

