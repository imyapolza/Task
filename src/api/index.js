import axios from "axios";
const API_TOKEN = '1875c1577a852f6124aada2b59faff4f3b51e17e'

const api = axios.create({
  baseURL: "https://suggestions.dadata.ru/suggestions/api/4_1/rs",
  headers: {
    'Authorization': `Token ${API_TOKEN}`
  }
});

export { api };
