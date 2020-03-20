export interface Rain {
  1h: number,
}

export interface WeatherAlt {
  id: number,
  main: string,
  description: string,
  icon: string,

}

export interface Clouds {
  all: number,
}

export interface Wind {
  speed: number,
  deg: number,
}

export interface Main {
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  temp_min: number,
  temp_max: number,
}

export interface List {
  dt: number,
  main: Main,
  wind: Wind,
  clouds: Clouds,
  weather: WeatherAlt,
  rain: Rain,
}

export interface Weather {
  message: string,
  cod: string,
  city_id: number,
  calctime: number,
  cnt: number,
  list: List[],
}
