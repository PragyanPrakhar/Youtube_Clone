// import { createSlice } from "@reduxjs/toolkit";

// const searchSlice = createSlice({
//     name: "search",
//     initialState: {},
//     reducers: {
//         cacheResult: (state, action) => {
//             return { ...state, ...action.payload };
//         },
//     },
// });

// export const { cacheResult } = searchSlice.actions;
// export default searchSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResult: (state, action) => {
            const newState = { ...state, ...action.payload };

            // Check if the new state exceeds 100 entries
            if (Object.keys(newState).length > 100) {
                const oldestKey = Object.keys(newState)[0]; // Get the first key
                delete newState[oldestKey]; // Remove the oldest entry
            }

            return newState; // Return the updated state
        },
    },
});

export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer;
