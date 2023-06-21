import { useMainStore } from "@/store/index.js";
import SearchModal from "@/components/SearchModal.vue";
import MapMarkerOutline from "vue-material-design-icons/MapMarkerOutline.vue";
import Refresh from "vue-material-design-icons/Refresh.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import { computed, ref } from "vue";

export default {
  name: "Header",
  emits: ["refreshData"],
  components: {
    SearchModal,
    Refresh,
    MapMarkerOutline,
    ChevronDown,
  },
  setup(props, context) {
    let showSearchModal = ref(false);
    const toggleSearchModal = (value) => {
      showSearchModal.value = value;
    };

    const mainStore = useMainStore();
    const getCurrentCity = computed(() => mainStore.currentCity);
    const updateWeather = () => context.emit("refreshData");
    return {
      showSearchModal,
      toggleSearchModal,
      getCurrentCity,
      updateWeather,
    };
  },
};
