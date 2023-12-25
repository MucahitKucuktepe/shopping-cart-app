import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import { useLocation, useNavigate,useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { title } = useParams();
  console.log(title);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [formData, setFormData] = useState(state);
  console.log(state);

  console.log(formData.name);
  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
     console.log(formData);
     await axios.put(
       `https://65872365468ef171392f526f.mockapi.io/products/${state.id}`,
       formData
     );
     navigate(-1)
  };
//65872365468ef171392f526f.mockapi.io/products
https: return (
  <div className="container">
    <ProductForm
      formData={formData}
      text="Update"
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  </div>
);
};

export default UpdateProduct;
