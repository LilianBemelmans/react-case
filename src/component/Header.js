import React, {Component} from 'react';

export default class Header extends Component {
    render () {
        return(
            <React.Fragment>
                <div className="row" style={{backgroundColor: "red"}}>
                    
                    <div className="col-md-">
                        <h2 style={ { textAlign: "left"}}>Smoelenboek</h2>
                    </div>
        
                    <div className="col-md" style={{textAlign: "right"}}>
                        <div className="btn-block">
                            <button type="button" style={{padding: 0, align: "center"}} className="btn btn-block dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h4>Smoelenboek</h4>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item">Toon Kaarten</a>
                                <a className="dropdown-item">Toon Rijen</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md" style={{ textAlign: "right"}}>
                        <h4><a>Toevoegen</a></h4>
                    </div>
                
                </div>
            </React.Fragment>
        );
    }
}