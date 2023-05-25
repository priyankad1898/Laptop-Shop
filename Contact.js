import { CardBody ,Card,CardTitle, Button, Container} from "reactstrap"

const Contact=() => {

    return(
        <div className="contact">

            <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>EmailId : sharplaptop@gmail.com</CardTitle>
            <CardTitle>Mobile No:985647234</CardTitle>
            <Container className="text-center">
                <Button color="primary" outline>Thank You</Button>
            </Container>
            </CardBody>
            </Card>
        </div>

    )

};
export default Contact;