import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name,title}){
    return(
        <div style={{background:"red" ,height:250,padding:60}}>
            <Card className="my-2 bg-warning">
                <CardBody style={{background:"pink" ,height:180,padding:60}}>
                <h1 className="text-center my-5" ><b>Welcome to Shrap Laptop</b></h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;