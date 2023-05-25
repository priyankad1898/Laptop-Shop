import React from "react";
import {ListGroup,ListGroupItem} from 'reactstrap';
const Menus=()=>{
    return(
        
        <ListGroup>
          <ListGroupItem tag="a" href="/"style={{background:"yellow" }}><b>Home</b></ListGroupItem>
            <ListGroupItem tag="a" href="/add-product"style={{background:"orange" }}><b>Add Product</b></ListGroupItem>
            <ListGroupItem tag="a" href="/view-product"style={{background:"teal" }}><b>View Product</b></ListGroupItem>
            <ListGroupItem tag="a" href="/update-product"style={{background:"green" }}><b>Update Product</b></ListGroupItem>
            <ListGroupItem tag="a" href="/contact-us"style={{background:"blue" }}><b>Contact</b></ListGroupItem>
           

        </ListGroup>
    );
    
}
export default Menus;