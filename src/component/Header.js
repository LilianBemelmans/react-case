import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

export default class Header extends Component {

    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render () {
        return(
            <React.Fragment>
                <div className="row" style={{ width: "100%", padding: 0, backgroundColor: "#f2f2f2"}}>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Smoelenboek</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.isOpen} navbar className="float-right">
                            <Nav className="mr-auto" navbar-right>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle tag="a" className="nav-link" caret>
                                        Smoelenboek
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag="a" href="/" active>Toon Kaarten</DropdownItem>
                                        <DropdownItem tag="a" href="/lijst" >Toon Lijst</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/toevoegen">Toevoegen</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </React.Fragment>
        );
    }
}