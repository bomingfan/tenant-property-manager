import React, { Component } from "react";
import "./TenantMain.css";
import Footer from '../../components/Footer';
import AuthService from '../../components/AuthService';
import withAuth from '../../components/withAuth';
import { Container, Row, Col, Slider } from 'react-materialize';
import { Icon, Input, Navbar, NavItem, Card, Slide } from 'react-materialize';

const Auth = new AuthService();

class TenantMain extends Component {
    
    handleLogout(){
        Auth.logout()
        this.props.history.replace('/llogin');
     }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Navbar right>
                            <NavItem href='Read-Me.html'>{this.props.user.email}</NavItem>
                            <NavItem type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</NavItem>
                        </Navbar>

                        <Navbar left>
                            <NavItem href='/'><Icon left={true}>home</Icon>Home</NavItem>
                            <NavItem href='rent-reminder.html'><Icon left={true}>attach_money</Icon>Rent</NavItem>
                            <NavItem href='create-repair.html'><Icon left={true}>create</Icon>Create Ticket</NavItem>
                            <NavItem href='view-repair.html'><Icon left={true}>view_list</Icon>View Tickets</NavItem>
                        </Navbar>
                    </Row>

                    <Row>
                        <Col m={6} s={6}>
                            <Card className='blue-grey darken-5' textClassName='white-text' title='Upcoming Payments' actions={[<a key='rent-reminder' href='rent-reminder.html'>Link To Rent</a>]}>
                                View your upcoming rent due.
		                    </Card>
                        </Col>

                        <Input m={6} s={6} type='select' label='Submit A Ticket Request' icon='format_paint' defaultValue='1'>
                            <option value='1'>Repair Ticket</option>
                            <option value='2'>Cleaning Ticket</option>
                            <option value='3'>Rent Ticket</option>
                        </Input>
                    </Row>

                    <Row>
                        <Slider >
                            <Slide
                                src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA1DAAAAJDQxODRmNjkwLTg4YTQtNDIzNy05ZTdhLTMyOGY1YTQyZGY5Mg.jpg"
                                title="Welcome Tenant!" placement="left">
                                This is your Apartment Management Portal.
	                        </Slide>
                            <Slide
                                src="http://www.jamesclarklaw.net/img/Spot/JamesClarkLawLandlordTenant.jpg"
                                title="Access your apartment and landlord in one place!"
                                placement="left">
                                Communicating with your landlord has never been easier!
	                        </Slide>
                            <Slide
                                src="https://assets.tvm.com.mt/en/wp-content/uploads/sites/2/2017/10/dar-xiri-1.jpg"
                                title="Let's get started"
                                placement="left">
                                Just use the menus above.
	                    </Slide>
                        </Slider>
                    </Row>

                </Container>

                <Footer />
            </div>

        )
    }
}

export default withAuth(TenantMain);
