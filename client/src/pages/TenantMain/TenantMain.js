import React, { Component } from "react";
import "./TenantMain.css";
import Footer from '../../components/Footer';
import TAuthService from '../../components/TAuthService';
import TwithAuth from '../../components/TwithAuth';
import { Container, Row, Col, Slider } from 'react-materialize';
import { Icon, Input, Navbar, NavItem, Card, Slide, Modal, Button, Collapsible, CollapsibleItem, Table } from 'react-materialize';
import API from "./../../utils/API";

const Auth = new TAuthService();

class TenantMain extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleTicketCreate = this.handleTicketCreate.bind(this);
        this.state = {
            bulletin1: null,
            bulletin2: null,
            bulletin3: null,
            ticket: [],
            tId: null
        }
    }

    componentWillMount() {
        this.setState({
            tId: Number.parseInt(this.props.user.id, 10)
        })
        
    }

    componentDidMount() {
        
        if (!Auth.loggedIn()) {
            alert("Token Expired, Please login again");
            setTimeout(this.props.history.replace('/tlogin'), 2000);
        }
        else {
            API.getTProperty(this.state.tId)
                .then(res => this.setState({
                    bulletin1: res.data.bulletin1,
                    bulletin2: res.data.bulletin2,
                    bulletin3: res.data.bulletin3
                })
            )
            API.getTicket(this.state.tId)
                .then(res => {
                    this.setState({
                        ticket: res.data
                    })
                })
                
        } 
    }

    handleLogout() {
        Auth.logout()
        this.props.history.replace('/tlogin');
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleTicketCreate(e) {
        e.preventDefault();
        API.getLId(this.state.tId)
        .then(res => 
            API.saveTicket({
                title: this.state.title,
                body: this.state.body,
                TenantId: this.state.tId,
                LandlordId: Number.parseInt(res.data[0].id, 0)
            })
                .then(res => alert("Ticket '" + res.data.title + "' Saved"))
                .then(this.handleTicketGet())
                .catch(err => console.log(err))
        )
    };

    handleTicketGet() {
        API.getTicket(this.state.tId)
        .then(res => this.setState({
            ticket: res.data
        }))
        .then(console.log(this.state.ticket))
    };

    handleTicketDelete = params => {
        console.log(params);
        API.deleteTicket(params)
        .then(alert("Ticket deleted!"))
        .then(this.handleTicketGet())
    };




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

                            <Modal
                                header='Create Ticket'
                                trigger={<NavItem><Icon left={true}>create</Icon>Create Ticket</NavItem>}>
                                <form onSubmit={this.handleTicketCreate}>
                                    <Input label="Title" validate
                                        onChange={this.handleChange}
                                        name="title"
                                    >
                                    </Input>
                                    <div className="input-field col s12">
                                        <textarea className="materialize-textarea"
                                            onChange={this.handleChange}
                                            name="body"
                                        ></textarea>
                                        <label>Body</label>
                                    </div>
                                    <Button waves='light'>Submit<Icon right>send</Icon></Button>
                                </form>
                            </Modal>

                            <Modal
                                header='View Tickets'
                                trigger={<NavItem><Icon left={true}>view_list</Icon>View Tickets</NavItem>}>
                                    <Table>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Content</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.ticket.map(ticket => (
                                        <tr key={ticket.id}>
                                            <td>{ticket.title}</td>
                                            <td>{ticket.body}</td>
                                            <td><Button 
                                            name={ticket.id}
                                            onClick={() => this.handleTicketDelete(ticket.id)}>Delete</Button></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                    </Table>
                                
                            </Modal>

                            
                        </Navbar>
                    </Row>

                    <Row>
                        <Col s={6}>
                            <Card className='blue-grey darken-5' textClassName='white-text' title='Upcoming Payments' actions={[<a key='rent-reminder' href='rent-reminder.html'>Link To Rent</a>]}>
                                View your upcoming rent due.
		                    </Card>
                        </Col>

                        <Col s={6}>
                        <Collapsible>
                            <CollapsibleItem header='Utilties' icon='filter_drama'>
                            {this.state.bulletin1 ? (this.state.bulletin1) : ("No Content")}
	                        </CollapsibleItem>
                            <CollapsibleItem header='Amenities' icon='place'>
                            {this.state.bulletin2 ? (this.state.bulletin2) : ("No Content")}
	                        </CollapsibleItem>
                            <CollapsibleItem header='Misc.' icon='whatshot'>
                            {this.state.bulletin3 ? (this.state.bulletin3) : ("No Content")}
	                        </CollapsibleItem>
                        </Collapsible>
                        </Col>
                    </Row>

                    <Row>
                        <Slider >
                            <Slide
                                src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA1DAAAAJDQxODRmNjkwLTg4YTQtNDIzNy05ZTdhLTMyOGY1YTQyZGY5Mg.jpg"
                                title={<p>Welcome {this.props.user.firstname}</p>} placement="left">
                                <p>This is your Apartment Management Portal.</p>
	                        </Slide>
                            <Slide
                                src="http://www.jamesclarklaw.net/img/Spot/JamesClarkLawLandlordTenant.jpg"
                                title={<p>Access your apartment and landlord in one place!</p>}
                                placement="left">
                                <p>Communicating with your landlord has never been easier!</p>
	                        </Slide>
                            <Slide
                                src="https://assets.tvm.com.mt/en/wp-content/uploads/sites/2/2017/10/dar-xiri-1.jpg"
                                title={<p>Let's get started.</p>}
                                placement="left">
                                <p>Just use the menus above.</p>
	                    </Slide>
                        </Slider>
                    </Row>
                    <Footer />
                </Container>

                
            </div>

        )
    }
}

export default TwithAuth(TenantMain);
