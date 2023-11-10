import { computed, ref, watch } from "vue";
import { event } from "vue-gtag";
import { useMainStore } from "@/store/index.js";
import CircularCloseIcon from "vue-material-design-icons/CloseCircleOutline.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import SearchIcon from "vue-material-design-icons/Magnify.vue";
export default {
  name: "SearchModal",
  emits: ["closeSearchModal"],
  props: {
    isModalVisible: {
      default: false,
      required: true,
    },
  },
  components: {
    CloseIcon,
    CircularCloseIcon,
    SearchIcon,
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
        } else {
          mainStore.searchList = [];
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
      event("city search", {
        event_category: "search",
        event_label: "User searched for city",
        value: searchText.value,
      });
    }
    const searchResults = computed(() => mainStore.searchList);

    const closeModal = () => {
      context.emit("closeSearchModal");
      mainStore.searchList = [];
    };
    const selectCity = (city) => {
      mainStore.updateCity(city);
      mainStore.updateLocation(city.coord.lat, city.coord.lon);
      mainStore.getCurrentWeatherByLocation(city.coord.lat, city.coord.lon);
      setTimeout(() => {
        clearSearch();
      }, 1000);
      closeModal();
      event("city selection", {
        event_category: "search",
        event_label: "User selected a location",
        value: city,
      });
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
