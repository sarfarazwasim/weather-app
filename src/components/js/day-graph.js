import SearchModal from "@/components/SearchModal.vue";
import MapMarkerOutline from "vue-material-design-icons/MapMarkerOutline.vue";
import Refresh from "vue-material-design-icons/Refresh.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";

export default {
  name: "DayGraph",
  emits: ["refreshData"],
  components: {
    SearchModal,
    Refresh,
    MapMarkerOutline,
    ChevronDown,
  },
  setup() {
    return {};
  },
};
