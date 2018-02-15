import React, { Component } from "react";
import "./TestSignin.css";
import Footer from '../../components/Footer';
import { Container, Row, Col, Slider } from 'react-materialize';
import { Icon, Input, Navbar, NavItem, Card, Slide, Button } from 'react-materialize';

class TestSignin extends Component {

    render() {
        return (
            <div>
                <Container>

                    <h1>Sign in</h1>

                    <Row>
<<<<<<< HEAD
                        <Col m={6} s={6}>
                            <Button left waves='light'>Tenant<Icon right>arrow_forward</Icon></Button>

                        </Col>

=======

        <Col m={6} s={6}>    
        <Button left waves='light' node='a' href="/tlogin">Tenant<Icon right>arrow_forward</Icon></Button>
        
        </Col>

        <Col m={6} s={6}>   
        <Button right waves='light' node='a' href="/llogin">Landlord<Icon right>arrow_forward</Icon></Button>
</Col>


>>>>>>> 6f129d2452c05ef2cb5946f568db4b61e028986c
                        <Col m={6} s={6}>
                            <Button right waves='light'>Landlord<Icon right>arrow_forward</Icon></Button>
                        </Col>

                    </Row>
                </Container>
                <Footer />
            </div>

        )
    }
}

export default TestSignin;