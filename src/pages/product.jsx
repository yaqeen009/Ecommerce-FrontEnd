import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetch";

const Product = () => {
  const { productId } = useParams();
  const url = "/public/data.json"; 
  const { data, loading, error } = useFetchData(url);

  const productData = data?.products?.featured?.find(
    (item) => item.id === Number(productId)
  );

  if (loading) {
    return <p>Loading please wait...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if(!productData){
    return <p>Product not found</p>
  }
  return (
    <div className="product">
      <h1>{productData.name}</h1>
    </div>
  );
};

export default Product;
