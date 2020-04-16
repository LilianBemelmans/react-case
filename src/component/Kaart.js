import React, { Component} from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from "reactstrap";

export default class Kaart extends Component {
    render() {
        return (
            <React.Fragment>
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
                    {/*<Button tag="a" href="/Edit" >Show</Button>*/}
                    <Button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Show</Button>
                </CardFooter>
            </Card>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            </React.Fragment>

        );
    }
}