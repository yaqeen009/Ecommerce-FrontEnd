import { createSlice } from "@reduxjs/toolkit";

const filterTypes = [
  {
    id: 1,
    sort: [
      "New Arrivals",
      "Trending",
      "Alphabetical (A ~ Z)",
      "Alphabetical (Z ~ A)",
      "Old-to-New",
      "New-to-Old",
      "Most Expensive",
      "Least Expensive",
    ],
  },
  {
    id: 2,
    categories: ["Boots", "Jerseys", "Balls", "Accessories"],
  },
  {
    id: 3,
    colors: ["Black", "White", "Red", "Blue", "Yellow", "Green"],
  },
  {
    id: 4,
    sizes: ["XXL", "XL", "L", "M", "S", "XS", "XXS"],
  },
];

const initialState = {
  selectedFilters: [],
};


const productSlice = createSlice({
    name:'filter',
    initialState: initialState,
    reducers:{

    }
})


export const {} = productSlice.actions
export default productSlice.reducer