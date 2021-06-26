import axios from "axios";

const KEY = "AIzaSyCuM7MxCtvXJiQ9JiunGDQ9CGtF1zUrT34";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
