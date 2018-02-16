import React, { Component } from "react";
import "./Home.css";
import Footer from '../../components/Footer';
import { Container, Row, Col } from 'react-materialize';
import { Icon, Button, Carousel} from 'react-materialize';


class SignIn extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Carousel options={{ autoPlay: true }} images={[
                        'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA1DAAAAJDQxODRmNjkwLTg4YTQtNDIzNy05ZTdhLTMyOGY1YTQyZGY5Mg.jpg', 'http://www.jamesclarklaw.net/img/Spot/JamesClarkLawLandlordTenant.jpg'
                        ,
                        'https://seda.college/wp-content/uploads/landlord.jpg',
                        'https://assets.tvm.com.mt/en/wp-content/uploads/sites/2/2017/10/dar-xiri-1.jpg',
                        'http://www.smartcondomanagement.com/content/uploads/2014/10/TheLandlord_zpse246c3d1.jpg'
                    ]} />

                    <h1>Sign in</h1>

                    <Row>
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
                    </Row>
                </Container>
                <Footer />
            </div>

        )
    }
}

export default SignIn;