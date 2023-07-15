import { ref, computed } from "vue";
import { useMainStore } from "@/store/index.js";
import Header from "@/components/Header.vue";
import HeroSection from "@/components/HeroSection.vue";
import AdditionalInfo from "@/components/AdditionalInfo.vue";
import UpcomingWeather from "@/components/UpcomingWeather.vue";
import LoaderScreen from "@/components/LoaderScreen.vue";
import DayGraph from "@/components/DayGraph.vue";

export default {
  name: "Home",
  components: {
    Header,
    HeroSection,
    AdditionalInfo,
    UpcomingWeather,
    DayGraph,
    LoaderScreen,
  },
  setup() {
    let latitude = ref(12.9762);
    let longitude = ref(77.6033);

    function getUserLocation() {
      mainStore.updateCircularLoaderValue(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude.value = position.coords.latitude;
          longitude.value = position.coords.longitude;
          fetchDataViaLocation();
        },
        (error) => {
          alert(error.message);
          fetchDataViaLocation();
        }
      );
    }
    const getLatitude = computed(() => {
      return latitude.value;
    });
    const getLongitude = computed(() => {
      return longitude.value;
    });
    const mainStore = useMainStore();
    function fetchDataViaLocation() {
      mainStore.updateLocation(latitude.value, longitude.value);
      mainStore.getCurrentWeatherByLocation(latitude.value, longitude.value);
      mainStore.fetchCityName(latitude.value, longitude.value);
    }

    const showLoader = computed(() => mainStore.isMainLoaderActive);
    const refreshWeatherData = () => {
      mainStore.getCurrentWeatherByLocation(undefined, undefined);
    };
    getUserLocation();
    return {
      getLatitude,
      getLongitude,
      getUserLocation,
      refreshWeatherData,
      showLoader,
    };
  },
};
