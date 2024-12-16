import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetOnSaleProducts = createAsyncThunk(
  "actGetOnSaleProducts/getOnSaleProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        "/products?isOnSale=true"
      );
      return await res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An error occurred while fetching the data.");
      }
    }
  }
);

export default actGetOnSaleProducts;
