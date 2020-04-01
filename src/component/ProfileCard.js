import React, { Component} from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default class ProfileCard extends Component {
    render() {
        return (
            <Card>
                <CardImg
                src= { this.props.data.img }
                alt="Card image cap">
                </CardImg>
                
                <CardBody>
                    <CardTitle><h4>{ (this.props.data.firstname)+" "+(this.props.data.lastname) }</h4></CardTitle>
                    <CardSubtitle>{ this.props.data.email }</CardSubtitle>
                    <CardSubtitle>{ this.props.data.phone}</CardSubtitle> 
                </CardBody>              
        
            </Card>  
        );
    }
}