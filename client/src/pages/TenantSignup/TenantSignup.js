import React from 'react';
import Footer from '../../components/Footer';
import { Container, Row, Col } from 'react-materialize';
import { Icon, Input } from 'react-materialize';
import './TenantSignup.css';

class TenantSignup extends React.Component {

    state = {
        landlord: [],
        fistname: "",
        lastname: "",
        email: "",
        password: "",
        address: ""
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
                            <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
                            <Input s={6} label="Last Name" validate><Icon>account_circle</Icon></Input>
                        </Row>

                        <Row>
                            <Input s={6} label="Email" validate><Icon>email</Icon></Input>
                            <Input s={6} label="Address" validate><Icon>home</Icon></Input>
                        </Row>

                        <Row>
                            <Input s={6} label="Password" validate><Icon>enhanced_encryption</Icon></Input>

                            <Input s={6} type='select' label="Select Landlord" defaultValue=''>
                                <option value='1'>Option 1</option>
                                <option value='2'>Option 2</option>
                                <option value='3'>Option 3</option>
                            </Input>
                        </Row>
                        <Row>
                            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                <Icon right>send</Icon>
                            </button>
                        </Row>
                    </form>
                </Container>
                <Footer />
            </div>

        )
    }
}

export default TenantSignup;
