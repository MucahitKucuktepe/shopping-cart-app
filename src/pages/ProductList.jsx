import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); //başlangıçta loading i göstermesi için true yaptım
  const [errorState, setErrorState] = useState(false);
  const getData = async () => {
    try {
      const res = await axios(
        "https://65872365468ef171392f526f.mockapi.io/products"
      );
      setProducts(res.data);
      setErrorState(false); // işlem başarılı olduğu için errorState i false a çekiyorum
    } catch (error) {
      console.log(error);
      setErrorState(true); // işlem başarırsız olursa errorState true çekiliyor
    } finally {
      setLoading(false); // neticenin kullanıcıya her türlü yansıtılabilmesi için  loading state i flase a çektim
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(products);
  if (errorState) {
    return <p>Something went wrong</p>;
  }
  return (
    <div className="container mt-3">
      <div className={"d-sm-block d-md-flex"}>
        {loading ? (
          <p className="text-center text-danger w-100">Loading....</p>
        ) : products.length ? (
          <>
            <article id="product-panel" className="col-md-5">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} getData={getData} />
              ))}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal products={products} />
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}

     
      </div>
    </div>
  );
};

export default ProductList;
