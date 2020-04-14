import React, { Component } from 'react';

import Header from './Header';
import Kaart from './Kaart';

export default class Home extends Component {
    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <div className="col-md-3" style={{marginLeft: 40, padding: 20}}>
                    {
                        this.props.data.map( (item) => {
                            return( <Kaart key={ item.id } data={ item } />)
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}