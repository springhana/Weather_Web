import axios from "axios";
console.log(process.env.REACT_APP_END_POINT);

const request = async (url: any, city: any) => {
  const params: any = { q: city, appid: process.env.REACT_APP_API_KEY };
  try {
    const response = axios.get(url, { params });
    var data = (await response).data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const WeatherFetch = async (city: any) =>
  request(process.env.REACT_APP_END_POINT, city);
