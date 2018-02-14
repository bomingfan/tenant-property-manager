import React from 'react';
import Footer from '../../components/Footer';
import { Container, Row, Col } from 'react-materialize';
import FormBtn from '../../components/Form';
import { Icon, Input } from 'react-materialize';
// import './TenantSignin.css';


class TenantSignin extends React.Component {

    state = {
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <Container>
                        <Row>
                            <Input s={5} label="Enter Your Email" validate><Icon>email</Icon>

                            </Input>
                        </Row>

                        <Row>
                            <Input s={5} label="Enter Your Password"
                                validate><Icon>lock</Icon>
                            </Input>

                        </Row>

                        <Row>
                        <button class="btn waves-effect waves-light" type="login" name="action">Login</button>
                        </Row>

                        <a href="#!">Create Tenant Account</a>
                        <br>
                        </br>
                        <a href="#!">Create Landlord Account</a>


                </Container>
            </div>
        )
    }
}

export default TenantSignin;