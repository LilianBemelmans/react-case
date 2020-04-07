import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';
import Kaart from './Kaart';

export default class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <div>
                    <ul>
                        {
                        this.state.data.map( (item) => {
                            return( <Kaart key={ item.id } data={ item } />)
                        })
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}