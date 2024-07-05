import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";

const initialState = {
    video:[],
    currentPlaying: null,
    searchTerm: "",
    searchResults:[],
    nextPageToken:null,
    recommendedVideo:[]
};

/**
 * Redux slice for managing the YouTube app state.
 *
 * @typedef {Object} YoutubeSlice
 * @property {string} name - The name of the slice.
 * @property {Object} initialState - The initial state of the slice.
 * @property {Object} reducers - The reducers for the slice.
 * @property {Function} extraReducers - The extra reducers for the slice.
 */
const youtubeSlice = createSlice({
    name:'youtubeApp', // Name of the slice
    initialState, // Initial state of the slice
    reducers:{ // Reducers for the slice (none defined here)

    },
    extraReducers:(builder)=>{ // Extra reducers for the slice
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{ // Add a case for the fulfilled action of getHomePageVideos
            if(action.payload && action.payload.parsedData){ // Check if the payload and parsedData exist
                state.video = action.payload.parsedData; // Update the videos state with the parsedData
                state.nextPageToken = action.payload.nextPageToken; // Update the nextPageToken state with the nextPageToken from the payload
            }
        })
    }
})

export default youtubeSlice.reducer; // Export the reducer from the slice
