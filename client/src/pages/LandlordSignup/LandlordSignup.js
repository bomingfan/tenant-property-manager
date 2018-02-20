import React from 'react';
import Footer from '../../components/Footer';
import { Container, Row, Col } from 'react-materialize';
import { Icon, Input, Button } from 'react-materialize';
import './LandlordSignup.css';
import API from "../../utils/API.js";

class LandlordSignup extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cellphone: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveLandlord({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            cellphone: this.state.cellphone
        }).then(res => alert("Registration Succesful! Please Login..."))
            .then(res => {this.props.history.replace("/llogin")})
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col s={4} />
                        <Col s={4}>
                            <img className="responsive-img"
                                src="https://thumbs.gfycat.com/IdioticEuphoricBarnowl-max-1mb.gif"
                                alt="thumbnail" />
                        </Col>
                        <Col s={4} />
                    </Row>
<form>
                        <Row>
                            <Input s={6} label="First Name" validate
                                value={this.state.firstname}
                                onChange={this.handleInputChange}
                                name="firstname"
                            ><Icon>account_circle</Icon></Input>

                            <Input s={6} label="Last Name" validate
                                value={this.state.lastname}
                                onChange={this.handleInputChange}
                                name="lastname"
                            ><Icon>account_circle</Icon></Input>
                        </Row>

                        <Row>
                            <Input s={6} label="Email" validate type='email'
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                            ><Icon>email</Icon></Input>

                            <Input s={6} label="Cell" validate
                                value={this.state.cellphone}
                                onChange={this.handleInputChange}
                                name="cellphone"
                            ><Icon>home</Icon></Input>
                        </Row>

                        <Row>
                            <Input s={6} label="Password" validate
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                type = "password"
                            ><Icon>enhanced_encryption</Icon></Input>

                        </Row>
                        <Row>
                            <Button waves='light'
                            onClick={this.handleFormSubmit}
                            >Submit<Icon right>send</Icon>
                            </Button>
                        </Row>
                        </form>

                        <Row>
                        <Button node='a' href='/' waves='light'>Go to Home Page<Icon right>home</Icon></Button>
                    </Row>
                </Container>
                <Footer />
            </div>

        )
    }
}

export default LandlordSignup;
