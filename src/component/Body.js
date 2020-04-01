import React, {Component} from 'react';
//import { ProfileCard } from './ProfileCard';
import ProfileCard from './ProfileCard';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default class Body extends Component {
    render () {
        return(
            <React.Fragment>
                <div className="row" style={{marginLeft: 40, padding: 20}}>              
                {
//                    this.state.data.map( item => {
//                        return( <ProfileCard key={ item.id } data={ item }/>  )
//                 })
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
                }
                </div>
            </React.Fragment>
        );
    }
}