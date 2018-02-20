import React from 'react';
import Footer from '../../components/Footer';
import { Container, Row, Col } from 'react-materialize';
import { Icon, Input, Button,Carousel } from 'react-materialize';
import TAuthService from '../../components/TAuthService.js';
import { Link } from "react-router-dom";


class TLogin extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new TAuthService();
    }

    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/tmain');
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.Auth.login(this.state.email, this.state.password)
            .then(res => {
                // console.log(res);
                this.props.history.replace('/tmain');
            })
            .catch(err => {
                // console.log(err);
                if (err.status === 401) {
                    alert('Authentication failed. User not found.');
                } if (err.status === 400) {
                    alert("Password Doesn't Match");
                }
            })
    }

    render() {
        return (
            <div>
                <h1><b><center>Tenant Property Manager</center></b></h1>
                <Container>
                <Carousel options={{ autoPlay: true }} images={[
                        'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA1DAAAAJDQxODRmNjkwLTg4YTQtNDIzNy05ZTdhLTMyOGY1YTQyZGY5Mg.jpg', 'http://www.jamesclarklaw.net/img/Spot/JamesClarkLawLandlordTenant.jpg'
                        ,
                        'https://seda.college/wp-content/uploads/landlord.jpg',
                        'https://assets.tvm.com.mt/en/wp-content/uploads/sites/2/2017/10/dar-xiri-1.jpg',
                        'http://www.smartcondomanagement.com/content/uploads/2014/10/TheLandlord_zpse246c3d1.jpg'
                    ]} />
                    <form onSubmit={this.handleFormSubmit}>
                        <Row>
                            <Col s={3} />
                            <Input s={5} label="Enter Your Email" validate
                                onChange={this.handleChange}
                                name="email"
                            ><Icon>email</Icon>
                            </Input>
                        </Row>

                        <Row>
                            <Col s={3} />
                            <Input s={5} type='password' label="Enter Your Password" validate
                                onChange={this.handleChange}
                                name="password"
                            ><Icon>lock</Icon>
                            </Input>
                        </Row>

                        <Row>
                            <Button waves='light'>Submit<Icon right>send</Icon></Button>
                        </Row>
                        
                        
                    </form>
                    
                    <Row>
                    <Link to="/tsignup">Create Tenant Account</Link>
                    </Row>
                    
                    <Row>
                        <Button node='a' href='/' waves='light'>Go to Home Page<Icon right>home</Icon></Button>
                    </Row>

                </Container>
                <Footer />
            </div>
        )
    }
}

export default TLogin;