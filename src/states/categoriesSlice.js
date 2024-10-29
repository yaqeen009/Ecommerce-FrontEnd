import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const response = await fetch("/public/data.json");
    const data = await response.json()
    return data;
  }
);

const initialState = {
  filters: {
    sort: "",
    color: "",
    category: "",
    size: "",
  },
  products: [],
  filteredProducts: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterProducts(state, action) {
      try {
        const { filterType, value } = action.payload;
        state.filters[filterType] = value;

        state.filteredProducts = state.products.filter((product) => {
          const matchesSort = state.filters.sort
            ? product.sort === state.filters.sort
            : true;
          const matchesCategory = state.filters.category
            ? product.category === state.filters.category
            : true;
          const matchesColor = state.filters.color
            ? product.color === state.filters.color
            : true;
          const matchesSize = state.filters.size
            ? product.size === state.filters.size
            : true;

          return matchesCategory && matchesColor && matchesSize && matchesSort;
        });
      } catch (error) {
        console.log(error);
      }
    },
    removeFilter(state, action) {
      try {
        const filter = action.payload;
        state.filters[filter] = "";
        
        state.filteredProducts = state.products.filter((product) => {
          const matchesSort = state.filters.sort
            ? product.sort === state.filters.sort
            : true;
          const matchesCategory = state.filters.category
            ? product.category === state.filters.category
            : true;
          const matchesColor = state.filters.color
            ? product.color === state.filters.color
            : true;
          const matchesSize = state.filters.size
            ? product.size === state.filters.size
            : true;

          return matchesCategory && matchesColor && matchesSize && matchesSort;
        });

      } catch (error) {
        console.error(error);
      }
    },
    clearFilters(state) {
      state.filters = {sort: "", color:"", category:"", size:""}
      state.filteredProducts = state.products
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.products = action.payload
      state.filteredProducts = action.payload
    })
    .addCase(fetchProducts.rejected, (state) => {
      state.status = 'failed'
    })
  },
});

export const {filterProducts, removeFilter, clearFilters} = productSlice.actions;
export default productSlice.reducer;