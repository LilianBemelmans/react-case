import React, { Component} from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from "reactstrap";

export default class Kaart extends Component {
    render() {
        return (
            <Card style={{width: "25%", marginBottom: 20, textAlign: "center", borderColor: "#808080", backgroundColor: 'red'}}>
                <CardImg top
                         src= { this.props.data.img }
    	                 alt="Image"
                         style={{ borderRadius: "100%",
                         width: 150, height: 150,
                         marginLeft: 20, marginTop: 20, marginBottom: -20}}/>
 
    	        <CardBody>
                    <CardTitle style={{ marginLeft:200, marginTop: -130}} >
                        <h4>{ (this.props.data.firstname) +" "+ (this.props.data.lastname) }</h4>
                    </CardTitle>
                    <CardSubtitle style={{ marginLeft:200, marginTop: 10}} >{ this.props.data.email } </CardSubtitle>
                    <CardSubtitle style={{ marginLeft:200, marginTop: 15}} >{ this.props.data.phone } </CardSubtitle>

                </CardBody>

                <CardFooter>
                    <Button tag="a" href="/EditKaart" >Show</Button>
                </CardFooter>
            </Card>

        );
    }
}