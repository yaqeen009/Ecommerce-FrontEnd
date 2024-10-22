import useFetchData from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../states/cartSlice";
import Card from "../components/card";
import Drawer from "../components/filterDrawer";
import Tag from "../components/filterTag";
import { useState, useEffect } from "react";

const Categories = () => {
  //hooks and states
  const [filterItem, setFilterItem] = useState(null);
  const [sizeState, setSizeState] = useState(null);
  const [colorState, setColorState] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //data fetching
  const url = "/public/data.json";
  const { data, loading, error } = useFetchData(url);
  const productData = data?.products?.trending || [];

  //click functionalities
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
  const handleItemClick = (item) => {
    setFilterItem(item);
  };
  //filters
  const sortByFilters = [
    "New Arrivals",
    "Trending",
    "Alphabetical (A ~ Z)",
    "Alphabetical (Z ~ A)",
    "Old-to-New",
    "New-to-Old",
    "Most Expensive",
    "Least Expensive",
  ];
  const categoriesFilters = ["Boots", "Jerseys", "Balls", "Accessories"];
  const colorFilters = ["Black", "White", "Red", "Blue", "Yellow", "Green"];
  const sizeFilters = ["XXL", "XL", "L", "M", "S", "XS", "XXS"];

  useEffect(() => {
    if (productData.length > 0) {
      if (productData[0]?.colors?.length > 0) {
        setColorState(productData[0].colors[0]);
      }
      if (productData[0]?.sizes?.length > 0) {
        setSizeState(productData[0].sizes[0]);
      }
    }
  }, [productData]);

  if (!productData || error) {
    return (
      <h1 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind text-font">
        Category not found!
      </h1>
    );
  }
  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  return (
    productData && (
      <div className="categories">
        <div className="mx-4 lg:mx-8 lg:mb-4">
          <h1 className="font-montserrat text-font text-mobile-headline md:text-tablet-headline lg:text-headlind">
            New Arrivals
          </h1>
          <div className="flex flex-row justify-between">
            <Drawer
              filters={sortByFilters}
              name={"Sort By"}
              handleItemClick={handleItemClick}
            />
            <div className="flex flex-row space-x-2">
              <Drawer
                filters={categoriesFilters}
                name={"Categories"}
                handleItemClick={handleItemClick}
              />
              <p>|</p>
              <Drawer
                filters={colorFilters}
                name={"Colors"}
                handleItemClick={handleItemClick}
              />
              <p>|</p>
              <Drawer
                filters={sizeFilters}
                name={"Sizes"}
                handleItemClick={handleItemClick}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#B0B0B020] w-[100%]">
          <div className="flex items-center space-x-2 py-3 mx-4 lg:mx-8">
            <p className="font-montserrat text-secondary text-mobile-body md:text-tablet-body lg:text-body mr-4">
              Filters |
            </p>
            <div className="flex flex-row space-x-2">
              {filterItem ? <Tag tagName={filterItem} /> : <p></p>}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-1 content-center lg:mx-8 mx-4 lg:my-5">
          {productData.map((item, index) => {
            return (
              <div className="lg:mx-8 mx-4 my-4">
                <Card
                  key={index}
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
        <p className="text-center">1 2 3 ... 4 5 6</p>
      </div>
    )
  );
};

export default Categories;
