import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      const res = await axios(
        "https://65872365468ef171392f526f.mockapi.io/products"
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(products);
  return (
    <div className="container mt-3">
      <div className={"d-sm-block d-md-flex"}>
        {/* <p className="text-center text-danger w-100">Loading....</p> */}

        <>
          <article id="product-panel" className="col-md-5">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} getData={getData} />
            ))}
          </article>
          <article className="col-md-5 m-3">
            <CardTotal />
          </article>
        </>

        {/* <p className="text-center text-danger w-100">No products data...</p> */}
      </div>
    </div>
  );
};

export default ProductList;
