import React, { Component } from "react";
import "./TestSignin.css";
import Footer from '../../components/Footer';
import { Container, Row, Col, Slider } from 'react-materialize';
import { Icon, Input, Navbar, NavItem, Card, Slide, Button, Carousel } from 'react-materialize';

class TestSignin extends Component {

    render() {
        return (
            <div>
                <Container>
                <Carousel images={[
	'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA1DAAAAJDQxODRmNjkwLTg4YTQtNDIzNy05ZTdhLTMyOGY1YTQyZGY5Mg.jpg', 'http://www.jamesclarklaw.net/img/Spot/JamesClarkLawLandlordTenant.jpg'
	,
	'https://seda.college/wp-content/uploads/landlord.jpg',
	'https://assets.tvm.com.mt/en/wp-content/uploads/sites/2/2017/10/dar-xiri-1.jpg',
	'http://www.smartcondomanagement.com/content/uploads/2014/10/TheLandlord_zpse246c3d1.jpg'
]} />


                    <h1>Sign in</h1>

                    <Row>
<<<<<<< HEAD

                        <Col m={6} s={6}>
                            <Button left waves='light' node='a' href="/tlogin">Tenant<Icon right>arrow_forward</Icon></Button>

                        </Col>

                        <Col m={6} s={6}>
                            <Button right waves='light' node='a' href="/llogin">Landlord<Icon right>arrow_forward</Icon></Button>
                        </Col>



=======

        <Col m={6} s={6}> 
        <h5>Tenant</h5>
        <h6>Find everything you need to track your apartment and communicate with your landlord.</h6>
        <br></br>
        <Button left waves='light' node='a' href="/tlogin">Tenant<Icon right>arrow_forward</Icon></Button>
        
        </Col>

        <Col m={6} s={6}>
        <h5>Landlord</h5>
        <h6>Find everything you need to manage your units and communicate with your tenants.</h6>  
        <br></br>
        <Button right waves='light' node='a' href="/llogin">Landlord<Icon right>arrow_forward</Icon></Button>
</Col>



>>>>>>> 175ac975f12f4e67725b44946cb9a2d5f5bf76ae

                    </Row>
                </Container>
                <Footer />
            </div>

        )
    }
}

export default TestSignin;