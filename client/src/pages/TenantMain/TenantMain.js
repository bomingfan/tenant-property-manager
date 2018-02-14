import React, { Component } from "react";
import "./TenantMain.css";
import Footer from '../../components/Footer';
import { Container, Row, Col } from 'react-materialize';
import { Icon, Input, Navbar, NavItem, Card } from 'react-materialize';
import AuthService from '../../components/AuthService';
import withAuth from '../../components/withAuth';

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
                            <NavItem href='/'><Icon>home</Icon>Home</NavItem>
                            <NavItem href='rent-reminder.html'><Icon>attach_money</Icon>Rent Reminder</NavItem>
                            <NavItem href='create-repair.html'><Icon>create</Icon>Create Repair Ticket</NavItem>
                            <NavItem href='view-repair.html'><Icon>view_list</Icon>View Repair Tickets</NavItem>
                        </Navbar>
                    </Row>

                    <Row>
                        <Col m={6} s={6}>
                            <Card className='blue-grey darken-5' textClassName='white-text' title='Upcoming Payments' actions={[<a key='rent-reminder' href='rent-reminder.html'>Link To Rent</a>]}>
                                View your upcoming rent due.
		</Card>
                        </Col>

                        <Input s={6} type='select' label='Submit A Ticket Request' icon='format_paint' defaultValue='1'>
                            <option value='1'>Repair Ticket</option>
                            <option value='2'>Cleaning Ticket</option>
                            <option value='3'>Rent Ticket</option>
                        </Input>
                    </Row>

                </Container>


                <Footer />
            </div>

        )
    }
}

export default withAuth(TenantMain);
