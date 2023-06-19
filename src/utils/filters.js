import dayjs from "dayjs";
import "dayjs/locale/id";
import "dayjs/locale/en";

const filters = {
  dateFormat(value, targetFormat = "ddd, DD MMM YYYY", parseZone = false) {
    if (value) {
      dayjs.locale("en");
      if (parseZone) {
        return `${dayjs(value).format(targetFormat)} ${parseZone}`;
      }
      return dayjs(value).format(targetFormat);
    } else {
      return "";
    }
  },
  capitalize(str) {
    const first = (str + "").slice(0, 1);
    const rest = (str + "").slice(1);
    return first.toUpperCase() + rest.toLowerCase();
  },
};
export default filters;
