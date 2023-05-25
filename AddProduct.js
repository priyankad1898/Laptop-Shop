import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AddProduct=()=>{
    useEffect(()=>{
        document.title="Add Product";
},[]);

    const [product,setproduct]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(product);
        postDatatoServer(product);
        e.preventDefault();

    }
//creating function to post data on server
const postDatatoServer=(data)=>{
    axios.post(`${base_url}/product`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Product added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h1 className="text-center my-6">Fill Product Details</h1>
        <Form onSubmit={handleForm}>
        <FormGroup>
                <label for="ProductId">Product Id</label>
                <Input
                        Type="text"
                        placeholder="Enter ProductID here"
                        name="product_id"
                        Id="product_id"
                        onChange={(e)=>{
                            setproduct({...product,product_id:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="description">Product Description</label>
                <Input
                        Type="textarea"
                        placeholder="Enter  Description here "
                        Id="product_description"
                        style={{height:150}}
                        onChange={(e)=>{
                            setproduct({...product,product_description:e.target.value});
                        }}
                />
                 </FormGroup>

                 

                 <FormGroup>
                <label for="Product Name">Product Name</label>
                <Input
                        Type="text"
                        placeholder="Enter Product Name here"
                        name="product_Name"
                        Id="product_Name"
                        onChange={(e)=>{
                            setproduct({...product,product_Name:e.target.value});
                        }}
                />
                </FormGroup>

                 <FormGroup>
                <label for="price">Product Price</label>
                <Input
                        Type="text"
                        placeholder="Enter  Price "
                        name="product_price"
                        Id="product_price"
                        onChange={(e)=>{
                            setproduct({...product,product_price:e.target.value});
                        }}
                />
          </FormGroup>


                <Container className="text-center">
                    <Button type="submit" color="success">Add Product</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default AddProduct;