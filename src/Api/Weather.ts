import axios from "axios";
console.log(process.env.REACT_APP_END_POINT);

const request = async (url: string | undefined, city: string) => {
  const params: { q: string; appid: string | undefined } = {
    q: city,
    appid: process.env.REACT_APP_API_KEY,
  };
  try {
    if (typeof url === "string") {
      const response = axios.get(url, { params });
      var data = (await response).data;
      console.log(data);
      return data;
    } else {
      return 0;
    }
  } catch (error) {
    console.log(error);
  }
};
export const WeatherFetch = async (city: string) =>
  request(process.env.REACT_APP_END_POINT, city);
