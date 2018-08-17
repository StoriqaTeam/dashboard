// @flow

import axios from "axios";

const dashboardApiEndpoint = "https://dash.stq.cloud";

const apiClient = {
  fetchMarketCap: () =>
    axios.get(`${dashboardApiEndpoint}/coinmarketcap/history/all`),
  fetchTokenInfo: () => axios.get(`${dashboardApiEndpoint}/coinmarketcap/last`),
  fetchTokenholders: () => () => ({ response: {} })
};

export default apiClient;
