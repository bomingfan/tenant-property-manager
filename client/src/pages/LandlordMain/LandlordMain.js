import React, { Component } from "react";
import "./LandlordMain.css";
import Footer from '../../components/Footer';
import { Container, Row, Col, Slider } from 'react-materialize';
import { Icon, Input, Navbar, NavItem, Card, Slide } from 'react-materialize';

class LandlordMain extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>                        
                        <Navbar s={3} right>
                            <NavItem href='Read-Me.html'>App Help</NavItem>
                            <NavItem href='sign-out.html'>Sign Out</NavItem>
                        </Navbar>
                       
                        <Navbar s={9} left>
                        <NavItem href='/'><Icon left={true}>home </Icon>Home</NavItem>
                            <NavItem href='rent-reminder.html'><Icon left={true}>attach_money</Icon>Rent Reminder</NavItem>
                            <NavItem href='create-repair.html'><Icon left={true}>announcement</Icon> Announcements</NavItem>
                            <NavItem href='view-repair.html'><Icon left={true}>view_list</Icon>Repair Tickets</NavItem>
                        </Navbar>                      
                    </Row>
                    <Row>
                        <Input s={6} type='select' label='View Properties' icon='location_city' defaultValue='1'>
                            <option value='1'>Property 1</option>
                            <option value='2'>Property 2</option>
                            <option value='3'>Property 3</option>
                        </Input>

                        <Input s={6} type='select' label='View Tenants' icon='people_outline' defaultValue='1'>
                            <option value='1'>Tenant 1</option>
                            <option value='2'>Tenant 2</option>
                            <option value='3'>Tenant 3</option>
                        </Input>
                    </Row>

                    <Row>
                        <Slider >
                            <Slide
                                src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA1DAAAAJDQxODRmNjkwLTg4YTQtNDIzNy05ZTdhLTMyOGY1YTQyZGY5Mg.jpg"
                                title="Welcome Landlord!" placement="left">
                                This is your Property Management Portal.
	                        </Slide>
                            <Slide
                                src="http://www.smartcondomanagement.com/content/uploads/2014/10/TheLandlord_zpse246c3d1.jpg"
                                title="Access all your properties and tenants in one place!"
                                placement="left">
                                Communicating with tenants has never been easier!
	                        </Slide>
                            <Slide
                                src="https://seda.college/wp-content/uploads/landlord.jpg"
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

export default LandlordMain;
