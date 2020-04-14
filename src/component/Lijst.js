import React, { Component } from 'react';

import Header from './Header';
import Regel from './Regel';

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
                            return( <Regel key={ item.id } data={ item } />)
                        })
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}