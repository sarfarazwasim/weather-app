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
      name: "",
      country: "",
    },
    isMainLoaderActive: false,
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
    updateCircularLoaderValue(value) {
      this.isMainLoaderActive = value;
    },
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
      long = this.currentLocation.lon,
      cb
    ) {
      this.isMainLoaderActive = true;
      const self = this;
      axios
        .get(api.byLocation(lat, long))
        .then(function (res) {
          if (res.statusText === "OK") {
            self.currentWeather = res.data.current;
            self.weekData = res.data.daily;
            self.isMainLoaderActive = false;
            cb?.();
          }
        })
        .catch(function (error) {
          console.log(error);
          self.isMainLoaderActive = false;
          cb?.();
        });
    },
    searchCity(cityName, success) {
      const self = this;
      axios
        .get(api.searchCity(cityName))
        .then(function (res) {
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
    fetchCityName(latitude, longitude, cb) {
      const self = this;
      self.isMainLoaderActive = true;
      axios
        .get(api.cityNameFromLocation(latitude, longitude))
        .then(function (res) {
          if (res.status === 200) {
            self.currentCity = {
              name: res.data?.city || "",
              country: res.data?.countryCode || "",
            };
            cb?.();
            self.isMainLoaderActive = false;
          }
        })
        .catch(function (error) {
          console.log(error);
          self.isMainLoaderActive = false;
          cb?.();
        });
    },
  },
});
