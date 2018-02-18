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
            landlord: [],
            fistname: "",
            lastname: "",
            email: "",
            password: "",
            address: "",
            lID: null
        }
    }


    componentDidMount() {
        // Request the landlords from API
        API.getLandlord()
        .then(res => {
            this.setState({
                landlord: res.data
            })
        });

    };

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
        console.log(e.target.value)
       
    }


    handleFormSubmit = event => {
        event.preventDefault();
        API.saveTenant({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            LandlordId: Number.parseInt(this.state.lID, 10)
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

                        <Input s={6} label="Address" validate
                        onChange = {this.handleChange}
                        name = "address"
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

                        <Input s={6} type='select' name = 'lID' label='Select Your Landlord' onChange={this.handleChange}>
                        {this.state.landlord.map(ll => (
                            <option 
                            value= {ll.id}
                            key={ll.id}
                            >
                            {ll.firstname}
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
