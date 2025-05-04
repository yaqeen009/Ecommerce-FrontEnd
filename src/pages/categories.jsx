/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../components/filterDrawer";
import Tag from "../components/filterTag";
import { useNavigate } from "react-router-dom";
import useFetchData from "../hooks/useFetch";
import Card from "../components/card";
import Pagination from "../components/filterPages";
import { filterProducts, removeFilter } from "../states/categoriesSlice";

const Categories = () => {
  //states & hooks
  const [sizeState, setSizeState] = useState(null);
  const [colorState, setColorState] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //selectors
  const sortItem = useSelector((state) => state.filter.filters.sort)
  const categoryItem = useSelector((state) => state.filter.filters.category)
  const colorItem = useSelector((state) => state.filter.filters.color)
  const sizeItem = useSelector((state) => state.filter.filters.size)
  const filteredProducts = useSelector((state) => state.filter.filteredProducts)

  //data fetching
  const url = "/public/data.json";
  const { data, loading, error } = useFetchData(url);
  const trendingData = data?.products?.trending || []; //for trending data

  // set default color and size
  useEffect(() => {
    if (trendingData.length > 0) {
      if (trendingData[0]?.colors?.length > 0) {
        setColorState(trendingData[0].colors[0]);
      }
      if (trendingData[0]?.sizes?.length > 0) {
        setSizeState(trendingData[0].sizes[0]);
      }
    }
  }, [trendingData]);

  //click functionalities
  const deleteSort = () => {
      dispatch(removeFilter('sort'))
  };
  const deleteCat = () => {
    dispatch(removeFilter('category'))
  };
  const deleteColor = () => {
    dispatch(removeFilter('color'))
  };
  const deleteSize = () => {
    dispatch(removeFilter('size'))
  };

  const handleProdClick = (productId) => {
    navigate(`/product/${productId + 1}`);
  };
  const handleAddToCart = (item) => {
    const productToAdd = {
      ...item,
      color: colorState,
      size: sizeState,
    };
    dispatch(addToCart(productToAdd));
    console.log("Item added to cart");
  };

  //objects
  const filters = {
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
    categories: ["Boots", "Jerseys", "Balls", "Accessories"],
    colors: ["Black", "White", "Red", "Blue", "Yellow", "Green"],
    sizes: ["XXL", "XL", "L", "M", "S", "XS", "XXS"],
  };

  const isFilterActive = sortItem || categoryItem || colorItem || sizeItem
  return (
    <div className="categories mx-4 lg:mx-8 lg:mt-16">
      <h1 className="font-montserrat text-font text-mobile-headline md:text-tablet-headline lg:text-headlind">
        New Arrivals
      </h1>
      <div className="flex flex-row justify-between">
        <Drawer
          name={"Sort by"}
          filters={filters.sort}
          setFilterItem={(item) => dispatch(filterProducts({filterType:"sort", value:item}))}
        />
        <div className="flex flex-row space-x-4">
          <Drawer
            name={"Categories"}
            filters={filters.categories}
            setFilterItem={(item) => dispatch(filterProducts({filterType:"category", value:item}))}
          />
          <Drawer
            name={"Colors"}
            filters={filters.colors}
            setFilterItem={(item) => dispatch(filterProducts({filterType:"color", value:item}))}
          />
          <Drawer
            name={"Sizes"}
            filters={filters.sizes}
            setFilterItem={(item) => dispatch(filterProducts({filterType:"size", value:item}))}
          />
        </div>
      </div>
      <div className="w-[100vw] h-fit py-2 bg-[#B0B0B020] lg:-mx-8 flex flex-row space-x-4 items-center">
        <p className="font-open_sans text-secondary text-mobile-body md:text-tablet-body lg:text-body ml-8">
          Filters
        </p>
        <span className="w-[1px] h-8 bg-font"></span>
        <div className="flex flex-row space-x-3 items-center">
          {sortItem && <Tag name={sortItem} btnFunction={deleteSort} />}
          {categoryItem && <Tag name={categoryItem} btnFunction={deleteCat} />}
          {colorItem && <Tag name={colorItem} btnFunction={deleteColor} />}
          {sizeItem && <Tag name={sizeItem} btnFunction={deleteSize} />}
        </div>
      </div>
        <div className="grid grid-cols-3 sm:grid-cols-1 content-center lg:-mx-8 -mx-4 my-5">
          {(isFilterActive ? filteredProducts: trendingData).map((item, index) => {
            return (
              <div key={index} className="lg:mx-8 mx-4 my-4">
                <Card
                  loading={loading}
                  error={error}
                  data={data}
                  image={item.image.large}
                  name={item.name}
                  price={item.price}
                  imgClick={() => handleProdClick(index)}
                  handleAddToCart={() => handleAddToCart(item)}
                />
              </div>
            );
          })}
        </div>
        <div className="pagination flex flex-row justify-center mb-4 items-baseline space-x-4">
          <Pagination page={1}/>
          <Pagination page={2}/>
          <Pagination page={3}/>
          <p>...</p>
          <Pagination page={8}/>
          <Pagination page={9}/>
          <Pagination page={10}/>
        </div>
    </div>
  );
};

export default Categories;
