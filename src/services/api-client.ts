import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "17b430d7fbc04ecfbe2b834bfda2d0e2",
  },
});
