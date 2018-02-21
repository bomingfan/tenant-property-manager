import React from 'react';
import Footer from '../../components/Footer';
import { Container, Row, Col } from 'react-materialize';
import { Icon, Input, Button } from 'react-materialize';
import './TenantSignup.css';
import API from "./../../utils/API";

class TenantSignup extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            property: [],
            fistname: "",
            lastname: "",
            email: "",
            password: "",
            address: "",
            pId: null
        }
    }


    componentDidMount() {
        // Request the landlords from API
        API.getProperty()
        .then(res => {
            this.setState({
                property: res.data
            })
        });
    };

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }


    handleFormSubmit = event => {
        event.preventDefault();
        API.saveTenant({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            cellphone: this.state.cellphone,
            PropertyId: Number.parseInt(this.state.pId, 10)
        })
            .then(res => alert("Registration Succesful! Please Login..."))
            .then(res => {this.props.history.replace("/tlogin")})
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
                        onChange = {this.handleChange}
                        name = "firstname"
                        ><Icon>account_circle</Icon></Input>

                        <Input s={6} label="Last Name" validate
                        onChange = {this.handleChange}
                        name = "lastname"
                        ><Icon>account_circle</Icon></Input>
                    </Row>

                    <Row>
                        <Input s={6} label="Email" validate
                        onChange = {this.handleChange}
                        name = "email"
                        ><Icon>email</Icon></Input>

                        <Input s={6} label="Cell" validate
                        onChange = {this.handleChange}
                        name = "cellphone"
                        ><Icon>home</Icon></Input>
                    </Row>

                    <Row>
                        <Input s={6} label="Password" validate
                        onChange = {this.handleChange}
                        name = "password"
                        type = "password"
                        >
                        <Icon>enhanced_encryption</Icon>
                        </Input>

                        <Input s={6} type='select' name = 'pId' label='Select Your Property' onChange={this.handleChange}>
                        {this.state.property.map(pp => (
                            <option 
                            value= {pp.id}
                            key={pp.id}
                            >
                            {pp.street}
                            </option>
                        ))}
                        </Input>
                        
                    </Row>
                    <Row>
                        <Button wave="light" onClick = {this.handleFormSubmit}>Submit
                                <Icon right>send</Icon>
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

export default TenantSignup;
