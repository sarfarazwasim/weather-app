import httpApi from "@/utils/http-api";
import { api } from "@/config";

export default {
  getCurrentWeatherByLocation: (lat, long) => {
    return httpApi.getDataViaApi({ url: api.byLocation(lat, long) });
  },
  getWalletHistory: (tokenId, requestParams) =>
    httpApi.getDataViaApi({
      url: api.idv.getWalletHistory,
      headers: { tokenId },
      queryParams: requestParams,
    }),
};
