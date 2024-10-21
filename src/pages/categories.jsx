import useFetchData from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../states/cartSlice";
import Card from "../components/card";

const Categories = () => {
  //data fetching
  const url = "/public/data.json";
  const { data, loading, error } = useFetchData(url);
  const productData = data?.products?.trending || [];

  //hooks 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //click functionalities
  const handleProdClick = (productId) => {
    navigate(`/product/${productId + 1}`)
  }
  const handleAddToCart = (item) => {
    const productToAdd = {
      ...item,
      color: colorState,
      size: sizeState,
    }
    dispatch(addToCart(productToAdd))
    console.log("Item added to cart");
    
  }

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
            <p>Sort</p>
            <div className="flex flex-row space-x-2">
              <p>Categories</p>
              <p>|</p>
              <p>Colors</p>
              <p>|</p>
              <p>Sizes</p>
            </div>
          </div>
        </div>
        <div className="bg-[#b1b1b123] w-[100%]">
          <div className="flex items-center space-x-2 py-2 mx-4 lg:mx-8">
            <p className="font-montserrat text-secondary text-mobile-body md:text-tablet-body lg:text-body mr-4">
              Filters |
            </p>
            <div className="flex flex-row space-x-2">
              <p className="text-mobile-body md:text-tablet-body lg:text-body">
                Black
              </p>
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
                    handleAddToCart={()=>handleAddToCart(item)}
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
