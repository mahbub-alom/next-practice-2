"use client"
import { useState } from "react"
import "../../style.css"
export default function Page(){
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [color,setColor]=useState("");
    const [company,setCompany]=useState("");
    const [category,setCategory]=useState("");


    const addProduct= async()=>{
        let result = await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,company,category})
        });
        result= await result.json();
        if(result.success){
            alert("new product added")
        }

    }

    return(
        <div>
            <h1>Add Products</h1>
            <input className="input" onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter Product Name"/>
            <input className="input" value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter Product Price"/>
            <input className="input" value={color} onChange={(e)=>setColor(e.target.value)} type="text" placeholder="Enter Product Color"/>
            <input className="input" value={company} type="text" onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Product Company"/>
            <input className="input" value={category} type="text" onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Product Category"/>
            <button onClick={addProduct} className="btnAddProduct">Add Product</button>
        </div>
    )
}