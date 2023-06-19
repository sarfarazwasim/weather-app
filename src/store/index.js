import { defineStore } from "pinia";
import { api } from "@/config";
import axios from "axios";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    currentWeather: {},
    currentLocation: {
      lat: "",
      lon: "",
    },
    weekData: [],
    searchList: [],
    currentCity: {
      name: "Bengaluru",
      country: "IN",
    },
  }),
  getters: {
    iconName() {
      return this.currentWeather.weather?.[0].icon || "01d";
    },
    weatherDescription() {
      return this.currentWeather.weather?.[0].description || "";
    },
    minMaxTemp() {
      return this.weekData?.[0]?.temp || {};
    },
  },
  actions: {
    updateCity(city) {
      this.currentCity = {
        name: city.name,
        country: city.sys.country,
      };
    },
    updateLocation(lat, lon) {
      this.currentLocation = {
        lat,
        lon,
      };
    },
    getCurrentWeatherByLocation(
      lat = this.currentLocation.lat,
      long = this.currentLocation.lon
    ) {
      const self = this;
      axios
        .get(api.byLocation(lat, long))
        .then(function (res) {
          console.log("[byLocation] ", res.data);
          if (res.statusText === "OK") {
            self.currentWeather = res.data.current;
            self.weekData = res.data.daily;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    searchCity(cityName, success) {
      const self = this;
      axios
        .get(api.searchCity(cityName))
        .then(function (res) {
          console.log("[searchCity] ", res.data);
          if (res.statusText === "OK") {
            self.searchList = res.data.list;
            success();
          }
        })
        .catch(function (error) {
          success();
          console.log(error);
        });
    },
  },
});
