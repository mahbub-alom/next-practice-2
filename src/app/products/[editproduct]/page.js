"use client";
import { useEffect, useState } from "react";
import "../../../style.css";
import Link from "next/link";
export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let productId = props.params.editproduct;
    let productData = await fetch(
      "http://localhost:3000/api/products/" + productId
    );
    productData = await productData.json();
    if (productData.success) {
      let result = productData.result;
      const { name, price, color, category, company } = result;
      setName(name);
      setPrice(price);
      setColor(color);
      setCompany(company);
      setCategory(category);
    }
  };

  const updateProduct = async () => {
    let productId = props.params.editproduct;
    let data = await fetch("http://localhost:3000/api/products/" + productId, {
      method: "PUT",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    data = await data.json();
    if (data.result) {
      alert("Product has been updated");
    }
  };

  return (
    <div>
      <h1>Update Products</h1>
      <input
        className="input"
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Enter Product Name"
      />
      <input
        className="input"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Enter Product Price"
      />
      <input
        className="input"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="text"
        placeholder="Enter Product Color"
      />
      <input
        className="input"
        value={company}
        type="text"
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Product Company"
      />
      <input
        className="input"
        value={category}
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Product Category"
      />
      <button onClick={updateProduct} className="btnAddProduct">
        Update Product
      </button>
      <Link href="/products">Go to Product List</Link>
    </div>
  );
}
