const BASE_URL = "https://openweathermap.org/data/2.5/";
const APP_ID = "439d4b804bc8187953eb36d2a8c26a02";
const UNIT = "metrics";

const app = {
  routerName: {
    home: "home",
    about: "about",
  },
  default: {
    locale: "id",
  },
};

const api = {
  byLocation: (latitude, longitude) => {
    return `${BASE_URL}onecall?lat=${latitude}&lon=${longitude}&units=${UNIT}&appid=${APP_ID}`;
  },
  searchCity: (city) => {
    return `${BASE_URL}find?q=${city}&units=${UNIT}&appid=${APP_ID}`;
  },
};

const API_RESPONSE_CODES = {
  UNAUTHORIZED: 401,
};

export { app, api, API_RESPONSE_CODES };
