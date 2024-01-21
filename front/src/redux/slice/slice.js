import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("users/getData", async () => {
  const response = await axios.get("http://localhost:5000/users");
  return response.data;
});
export const delData = createAsyncThunk("users/delData", async (id) => {
  const response = await axios.delete(`http://localhost:5000/users/${id}`);
  return response.data;
});
export const postData = createAsyncThunk("users/postData", async (newp) => {
  const response = await axios.post("http://localhost:5000/users", newp);
  return response.data;
});

const initialState = {
  products: [],
  basket: JSON.parse(localStorage.getItem("cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const { _id, name, price, image } = action.payload;
      let index = state.basket.findIndex((p) => p._id === _id);
      if (index !== -1) {
        state.basket[index].count += 1;
      } else {
        state.basket.push({ _id, name, price, image, count: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.basket));
    },
    remvcart: (state, action) => {
      const { _id, name, price, image } = action.payload;
      let index = state.basket.findIndex((p) => p._id === _id);
      if (index !== -1) {
        if (state.basket[index].count > 1) {
          state.basket[index].count -= 1;
        } else {
          state.basket = state.basket.filter((p) => p._id !== _id);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.basket));
    },
    delcart: (state, action) => {
      const { _id, name, price, image } = action.payload;
      let index = state.basket.findIndex((p) => p._id === _id);
      if (index !== -1) {
        state.basket = state.basket.filter((p) => p._id !== _id);
      }
      localStorage.setItem("cart", JSON.stringify(state.basket));
    },

    addtowish: (state, action) => {
      const { _id, name, price, image } = action.payload;
      let index = state.wishlist.findIndex((p) => p._id === _id);
      if (index !== -1) {
        state.wishlist = state.wishlist.filter((p) => p._id !== _id);
      } else {
        state.wishlist.push({ _id, name, price, image });
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.products = [...action.payload];
    });
    builder.addCase(delData.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (p) => p._id !== action.payload._id
      );
    });

    builder.addCase(postData.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
  },
});

export const { addtocart, remvcart, delcart, addtowish } = counterSlice.actions;

export default counterSlice.reducer;
