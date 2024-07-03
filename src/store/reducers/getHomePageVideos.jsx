import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import parseData from "../../utils/parseData";

const VIMEO_ACCESS_TOKEN = '8c44f20c39503e1ebbbb7c04a0658dab';

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/homePageVideos",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    const params = {
      query: "technology",
      per_page: 20,
      page: isNext ? nextPageTokenFromState : 1,
    };

    try {
      const response = await axios.get(`https://api.vimeo.com/videos`, {
        params,
        headers: {
          Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
        },
      });

      const items = response.data.data;
      console.log(items);

      const parsedData = await parseData(items);
      const nextPageToken = response.data.page + 1;

      return { parsedData, nextPageToken };
    } catch (error) {
      console.error("Error fetching Vimeo videos:", error);
      throw error;
    }
  }
);
