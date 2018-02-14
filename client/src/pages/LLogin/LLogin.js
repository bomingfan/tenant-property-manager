import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import { Icon, Input} from 'react-materialize';
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
            this.props.history.replace('/');
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
                console.log(res);
                this.props.history.replace('/');  
            })
            .catch(err => {
                alert(err);
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
                            <Input s={5} label="Enter Your Password" validate
                                onChange={this.handleChange}
                                name="password"
                            ><Icon>lock</Icon>
                            </Input>
                        </Row>

                        <Row>
                            <input
                                className="form-submit"
                                value="SUBMIT"
                                type="submit"
                            />
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