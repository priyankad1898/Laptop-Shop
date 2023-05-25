import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,CardTitle} from "reactstrap";

import base_url from "../api/bootapi";

const Product=({product,update})=>{

  //delete product
      const deleteProduct = (id) => {
        axios.delete(`${base_url}/product/${id}`)
          .then((response) => {
            // Log the response data
            console.log(response.data);
            toast.success("Product Deleted Successfully");
            update(id);
          })
          .catch((success) => {
            // Log any error messages
            console.log(success);
            toast.success("Product Deleted Successfully");
          });
      };
      
  
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
        toast.success("Product Deleted Successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
          <CardSubtitle className="font-weight-bold">{product.product_name}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">{product.product_price}</CardSubtitle>
          <CardText>{product.product_description}</CardText>  
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteProduct(product.id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-product">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Product;