import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAPI } from "./roomAPI";
import { IRoomData } from "./types";
import { filterRoomData } from "./utils";

const initialState: {
  isLoading: boolean;
  error: any;
  data: IRoomData[];
} = {
  isLoading: true,
  error: null,
  data: [],
};
export const fetchRoomData = createAsyncThunk("room/fetchData", getAPI);

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoomData.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(
      fetchRoomData.fulfilled,
      (state, action: PayloadAction<any>) => {
        const data = filterRoomData(action.payload.roomInfo);
        state.data = data;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchRoomData.rejected, (state) => {
      state.error = "something went wrong";
      state.isLoading = false;
    });
  },
});
