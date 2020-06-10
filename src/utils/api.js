import axios from "axios";

const BASE_URL = "http://localhost:5000";

async function getAllUrls() {
  try {
    const res = await axios.get(`${BASE_URL}/urls`);
    const allUrls = res.data;

    console.log(allUrls);
    return allUrls;
  } catch (error) {
    console.error(error);
  }
}

export { getAllUrls };
