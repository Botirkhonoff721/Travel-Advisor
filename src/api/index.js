import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
  params: {
    bl_latitude: " 41.311081 ",
    tr_latitude: "41.311081",
    bl_longitude: "69.240562",
    tr_longitude: "69.240562",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "c5f94d4151mshc49d3b09c50b07cp140544jsnfd56e770dbb4",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
console.log(error)

  }
};
