import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Best Laptop";
},[]);
    return(
        
    <div >
               
       <Card className="text-center" border="success">
        <CardBody style={{background:"cyan" ,height:250,padding:60}}>
            <CardTitle><b><u><h3>Best Note Book </h3></u></b></CardTitle>
            
            <p> 
               <i><b> find the best laptop here</b></i><br></br> 
               Shrap Laptop Shop Located in Vasai East is a Computer and Laptop Store.
                We are Specialist in Wholesaler and Retailer in Branded Laptops Such as Dell, Hp, Asus, Lenovo, acer, and more. 
                Visit us to Get for Best Of Laptop Service.


            </p>
            <Container className="text-center">
                
            

            </Container>
        </CardBody>
        </Card>  
     </div>
    );
};

export default Home;