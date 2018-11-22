import axios from "axios";

export const apiClient = {
  fetchDashboardData: async () => {
    try {
      const response = await axios({
        url: "apiResponse.json",
        method: "GET",
        mode: "cors"
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  fetchScreenshot: async url => {
    try {
      const response = await axios.get(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbWggTX3x9dnC8qXnphuhFWISOqwsDMA_lvIcHUwiwdsSW4mm",
        { responseType: "arraybuffer" }
      );
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      return "data:;base64," + base64;
    } catch (error) {
      throw error;
    }
  }
};
