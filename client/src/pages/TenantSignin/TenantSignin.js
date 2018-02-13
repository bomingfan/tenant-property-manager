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
                    <form>
                        <Row>
                            <Input s={5} label="Enter Your Email" validate><Icon>email</Icon>

                            </Input>
                        </Row>

                    </form>

                    <form>
                        <Row>
                            <Input s={5} label="Enter Your Password"
                                validate><Icon>lock</Icon>
                            </Input>

                        </Row>

                    </form>

                    <form>
                        <Row>
                        <button class="btn waves-effect waves-light" type="login" name="action">Login</button>
                        </Row>
                    </form>

                    <form>
                        <a href="#!">Create Tenant Account</a>
                        <br>
                        </br>
                        <a href="#!">Create Landlord Account</a>
                    </form>


                </Container>
            </div>
        )
    }
}

export default TenantSignin;