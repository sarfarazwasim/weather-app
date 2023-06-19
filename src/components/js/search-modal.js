import { computed, ref, watch } from "vue";
import { useMainStore } from "@/store/index.js";
import CircularCloseIcon from "vue-material-design-icons/CloseCircleOutline.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
export default {
  name: "SearchModal",
  emits: ["closeSearchModal"],
  components: {
    CloseIcon,
    CircularCloseIcon,
  },
  setup(props, context) {
    const searchText = ref("");
    function clearSearch() {
      searchText.value = "";
      mainStore.searchList = [];
    }
    watch(
      () => searchText.value,
      (val) => {
        if (val.trim().length > 2) {
          handleSearch();
        }
      }
    );
    let debounceTimer = ref("");
    const handleSearch = () => {
      if (debounceTimer.value) {
        clearTimeout(debounceTimer.value);
      }
      debounceTimer.value = setTimeout(() => {
        searchCities();
      }, 800);
    };

    const resetTimer = () => {
      clearTimeout(debounceTimer.value);
      debounceTimer.value = "";
    };

    const mainStore = useMainStore();
    function searchCities() {
      mainStore.searchCity(searchText.value, resetTimer);
    }
    const searchResults = computed(() => mainStore.searchList);

    const closeModal = () => {
      context.emit("closeSearchModal");
      mainStore.searchList = [];
    };
    const selectCity = (city) => {
      console.log("[city] ", city);
      mainStore.updateCity(city);
      mainStore.updateLocation(city.coord.lat, city.coord.lon);
      mainStore.getCurrentWeatherByLocation(city.coord.lat, city.coord.lon);
      closeModal();
    };
    return {
      searchText,
      clearSearch,
      handleSearch,
      searchResults,
      debounceTimer,
      selectCity,
      closeModal,
    };
  },
};
