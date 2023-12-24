import React from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";

const ProductList = () => {
  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        <article id="product-panel" className="col-md-6">
          <ProductCard />
        </article>
        <article className="col-md-4 m-3">
          <CardTotal />
        </article>
      </div>
    </div>
  );
};

export default ProductList;
