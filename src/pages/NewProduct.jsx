import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
const initialState = {
  name: "",
  image: "",
  price: 0,
  dampingRate: 0.8,
  amount: 0,
};
const NewProduct = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    // console.log(e.target.value);

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await axios.post(
      "https://65872365468ef171392f526f.mockapi.io/products",
      formData
    );
    setFormData(initialState);
  };
  return (
    <div>
      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text="New"
      />
    </div>
  );
};

export default NewProduct;
