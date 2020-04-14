import React, {Component} from 'react';

export default class Header extends Component {
    render () {
        return(
            <React.Fragment>
                <div className="row" style={{padding: 0, backgroundColor: "#f2f2f2"}}>
                    
                    <div className="col-md-">
                        <h2 id="smoelenboek" style={ { textAlign: "left", verticalAlign: "text-bottom", padding: 20}}>Smoelenboek</h2>
                    </div>
        
                    <div className="col-md" style={{textAlign: "right", padding: 20, marginLeft: 1200}}>
                        <div className="btn-block">
                            <button type="button" style={{padding: 0, align: "center"}} className="btn btn-block dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h4>Smoelenboek <i className="fas fa-caret-down"></i>  </h4>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/">Toon Kaarten</a>
                                <a className="dropdown-item" href="/lijst">Toon Rijen</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md" style={{ textAlign: "left",  marginLeft: 10, padding: 20}}>
                        <h4><a style={{color: "#000000"}} href="/toevoegen">Toevoegen</a></h4>
                   </div>
                </div>
            </React.Fragment>
        );
    }
}