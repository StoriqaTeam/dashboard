// @flow

import axios from "axios";

const dashboardApiEndpoint = "https://dash.stq.cloud";

const apiClient = {
  fetchMarketCap: () =>
    axios.get(`${dashboardApiEndpoint}/coinmarketcap/history/all`),
  fetchTokenInfo: () => axios.get(`${dashboardApiEndpoint}/coinmarketcap/last`),
  fetchTokenholders: () =>
    axios.get(`${dashboardApiEndpoint}/stq/tokenholders_stats`)
};

export default apiClient;
