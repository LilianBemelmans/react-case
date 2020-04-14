import React, { Component } from 'react';

import Header from './Header';
import Kaart from './Kaart';

export default class Lijst extends Component {
    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <div>
                    Dit is de lijst.
                    <ul>
                        {
                        this.props.data.map( (item) => {
                            return( <Kaart key={ item.id } data={ item } />)
                        })
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}