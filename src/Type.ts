interface WeatherInfo {
  weather: Weather[];
  main: Main;
  wind: Wind;
  name: string;
}

interface Weather {
  main: string;
}
interface Main {
  temp: number;
  humidity: number;
}
interface Wind {
  speed: number;
}

interface WeatherInfoProps {
  weatherData: WeatherInfo;
}

export default WeatherInfoProps;
