import { computed } from "vue";
import { useMainStore } from "@/store/index.js";
export default {
  name: "HeroSection",
  components: {},
  setup() {
    const mainStore = useMainStore();
    const currentTemp = computed(() =>
      Math.round(mainStore.currentWeather.temp || 20)
    );
    const feelsLike = computed(() =>
      Math.round(mainStore.currentWeather.feels_like || 20)
    );
    const date = computed(() => Math.round(mainStore.currentWeather.dt * 1000));
    const getIconPath = computed(() =>
      require(`@/assets/icons/${mainStore.iconName}.svg`)
    );
    const getDescription = computed(() => mainStore.weatherDescription);
    const maxTemp = computed(() => Math.round(mainStore.minMaxTemp.max || 0));
    const minTemp = computed(() => Math.round(mainStore.minMaxTemp.min || 0));
    return {
      currentTemp,
      feelsLike,
      date,
      getIconPath,
      getDescription,
      maxTemp,
      minTemp,
    };
  },
};
