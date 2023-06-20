import { useMainStore } from "@/store/index.js";
import { computed } from "vue";
import CalendarOutline from "vue-material-design-icons/CalendarOutline.vue";

export default {
  name: "AdditionalInfo",
  components: {
    CalendarOutline,
  },
  setup() {
    const mainStore = useMainStore();
    const weekData = computed(() => {
      const list = mainStore.weekData;
      list.shift();
      return list;
    });
    const getIconPath = (name) => require(`@/assets/icons/${name}.svg`);
    return {
      weekData,
      getIconPath,
    };
  },
};
