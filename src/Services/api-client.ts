import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  // baseURL: 'https://.io/api',
  params: {
    key: "ff19ddf8b0ab4b369cff1b7cf53fff4b",
  },
});