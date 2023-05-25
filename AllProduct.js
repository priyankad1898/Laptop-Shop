import React, { useState,useEffect } from "react";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import Product from "./Product";

const AllProduct =() => {

    useEffect(() => {
            document.title="All Product";
    });

    //Function to call servers
    const getAllProductFromServer = () => {
        axios.get(`${base_url}/product`).then(
            (response) => {
                //For Success
               // console.log("Success");
                console.log(response.data);
                toast.success(" All Product ",{position:"bottom-center"});
                setproduct(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllProductFromServer();
        },[]);

    const [product,setproduct]=useState([]);

    const updateProduct=(id)=>{
        setproduct(product.filter((c)=>c.id!==id));
    };

    return(
        <div>
            <h1><b>All Products</b></h1>
            <p>List of all Products</p>
           {product.length > 0 
            ? product.map((item) => <Product key={item.id} product={item}/>) 
            :"No Product"}
       </div>

    );
};

export default AllProduct;