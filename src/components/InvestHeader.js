import React, {Component} from "react";

import {Nav, Navbar, Col} from 'react-bootstrap';

import "../styles/App.css"

class InvestHeader extends Component{
    constructor(){
        super();
    }

    render() {
        return(
            <Col>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Invest Manager</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#corretagem">Corretagem</Nav.Link>
                    </Nav>
                </Navbar>
            </Col>
        )
    }
}

export default InvestHeader;