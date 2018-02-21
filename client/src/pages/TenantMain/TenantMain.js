import React, { Component } from "react";
import "./TenantMain.css";
import Footer from '../../components/Footer';
import TAuthService from '../../components/TAuthService';
import TwithAuth from '../../components/TwithAuth';
import { Container, Row, Col, Slider } from 'react-materialize';
import { Icon, Input, Navbar, NavItem, Card, Slide, Modal, Button, Collapsible, CollapsibleItem } from 'react-materialize';
import API from "./../../utils/API";

const Auth = new TAuthService();

class TenantMain extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleTicketCreate = this.handleTicketCreate.bind(this);
    } 

    // componentDidMount() {
    //     API.getBulletin()
    // }

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
        API.saveTicket({
            title: this.state.title,
            body: this.state.body,
            TenantId: Number.parseInt(this.props.user.id, 10)
        })
            .then(res => alert("Note '" + res.data.title + "' Saved"))
            .catch(err => console.log(err));
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

                            <NavItem href='view-repair.html'><Icon left={true}>view_list</Icon>View Tickets</NavItem>
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
                            <CollapsibleItem header='First' icon='filter_drama'>
                                Lorem ipsum dolor sit amet.
	                        </CollapsibleItem>
                            <CollapsibleItem header='Second' icon='place'>
                                Lorem ipsum dolor sit amet.
	                        </CollapsibleItem>
                            <CollapsibleItem header='Third' icon='whatshot'>
                                Lorem ipsum dolor sit amet.
	                        </CollapsibleItem>
                        </Collapsible>
                        </Col>
                    </Row>

                    <Row>
                        <Slider >
                            <Slide
                                src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA1DAAAAJDQxODRmNjkwLTg4YTQtNDIzNy05ZTdhLTMyOGY1YTQyZGY5Mg.jpg"
                                title={<p>Welcome {this.props.user.email}</p>} placement="left">
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
