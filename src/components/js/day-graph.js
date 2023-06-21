import SearchModal from "@/components/SearchModal.vue";
import Magnify from "vue-material-design-icons/Magnify.vue";
import MapMarkerOutline from "vue-material-design-icons/MapMarkerOutline.vue";
import Refresh from "vue-material-design-icons/Refresh.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";

export default {
  name: "DayGraph",
  emits: ["refreshData"],
  components: {
    SearchModal,
    Magnify,
    Refresh,
    MapMarkerOutline,
    ChevronDown,
  },
  setup() {
    return {
    };
  },
};
