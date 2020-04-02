import React, { Component} from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default class ProfileCard extends Component {
    render() {
        return (
            <li key={ this.props.data.id.toString() }>
                <div>
                <img src={ this.props.data.img } alt="Image" />
                <p>{ this.props.data.firstname + " " + this.props.data.lastname }</p>
                <p>{ this.props.data.email }</p>
                <p>{ this.props.data.phone }</p>
                </div>
            </li>
        );
    }
}