import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import { Icon, Input, Button} from 'react-materialize';
import AuthService from '../../components/AuthService.js';


class LLogin extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/lmain');
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
                this.props.history.replace('/lmain');  
            })
            .catch(err => {
                // console.log(err);
                if(err.status === 401) {
                    alert('Authentication failed. User not found.');
                } if (err.status === 400) {
                    alert("Password Doesn't Match");
                }
            })
    }

    render() {
        return (
            <div>
                <h1><b><center>Landlord Property Manager</center></b></h1>
                <Container>
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

                        <a href="/tsignup">Create Tenant Account</a>
                        <br>
                        </br>
                        <a href="/lsignup">Create Landlord Account</a>
                    </form>


                </Container>
            </div>
        )
    }
}

export default LLogin;