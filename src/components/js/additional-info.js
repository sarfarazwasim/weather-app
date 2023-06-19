import { computed } from "vue";
import { useMainStore } from "@/store/index.js";
export default {
  name: "AdditionalInfo",
  components: {},
  setup() {
    const mainStore = useMainStore();
    const humidity = computed(() =>
      Math.round(mainStore.currentWeather.humidity || 0)
    );
    const windSpeed = computed(() =>
      Math.round(mainStore.currentWeather.wind_speed || 0)
    );
    const rainChance = computed(() => {
      const today = mainStore.weekData?.[0] || {};
      return Math.round(today.pop * 100) || 0;
    });
    return {
      humidity,
      windSpeed,
      rainChance,
    };
  },
};
