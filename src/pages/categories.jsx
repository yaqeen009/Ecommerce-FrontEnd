import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Drawer from "../components/filterDrawer";
import Tag from "../components/filterTag";
import { useNavigate } from "react-router-dom";
import useFetchData from "../hooks/useFetch";
import Card from "../components/card";
import Pagination from "../components/filterPages";

const Categories = () => {
  //states & hooks
  const [sortItem, setSortItem] = useState(null);
  const [catItem, setCatItem] = useState(null);
  const [colorItem, setColorItem] = useState(null);
  const [sizeItem, setSizeItem] = useState(null);
  const [sizeState, setSizeState] = useState(null);
  const [colorState, setColorState] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if (sortItem) {
      setSortItem(!sortItem);
    }
  };
  const deleteCat = () => {
    if (catItem) {
      setCatItem(!catItem);
    }
  };
  const deleteColor = () => {
    if (colorItem) {
      setColorItem(!colorItem);
    }
  };
  const deleteSize = () => {
    if (sizeItem) {
      setSizeItem(!sizeItem);
    }
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

  return (
    <div className="categories mx-4 lg:mx-8 lg:mt-16">
      <h1 className="font-montserrat text-font text-mobile-headline md:text-tablet-headline lg:text-headlind">
        New Arrivals
      </h1>
      <div className="flex flex-row justify-between">
        <Drawer
          name={"Sort by"}
          filters={filters.sort}
          setFilterItem={setSortItem}
        />
        <div className="flex flex-row space-x-4">
          <Drawer
            name={"Categories"}
            filters={filters.categories}
            setFilterItem={setCatItem}
          />
          <Drawer
            name={"Colors"}
            filters={filters.colors}
            setFilterItem={setColorItem}
          />
          <Drawer
            name={"Sizes"}
            filters={filters.sizes}
            setFilterItem={setSizeItem}
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
          {catItem && <Tag name={catItem} btnFunction={deleteCat} />}
          {colorItem && <Tag name={colorItem} btnFunction={deleteColor} />}
          {sizeItem && <Tag name={sizeItem} btnFunction={deleteSize} />}
        </div>
      </div>
        <div className="grid grid-cols-3 sm:grid-cols-1 content-center lg:-mx-8 -mx-4 my-5">
          {trendingData.map((item, index) => {
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
