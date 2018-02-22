import React, { Component } from "react";
import "./LandlordMain.css";
import Footer from '../../components/Footer';
import AuthService from '../../components/AuthService';
import withAuth from '../../components/withAuth';
import { Container, Row, Slider } from 'react-materialize';
import { Icon, Input, Navbar, NavItem, Slide, Modal, Button, Collection, CollectionItem, Table, Badge } from 'react-materialize';
import API from "./../../utils/API";


const Auth = new AuthService();

class LandlordMain extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleProperty = this.handleProperty.bind(this);
        this.addProperty = this.addProperty.bind(this);
        this.state = {
            lId: null,
            property:[],
            ticket:[]
        }
    } 
     
    componentDidMount() {
        this.setState({
            lId: Number.parseInt(this.props.user.id, 10)
        });
        API.getLTicket(Number.parseInt(this.props.user.id, 10))
        .then(res => this.setState({
            ticket: res.data
        }))
    }


    handleLogout() {
        Auth.logout()
        this.props.history.replace('/llogin');
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    addProperty(e) {
        e.preventDefault();
        API.saveProperty({
            street: this.state.street,
            unit: this.state.unit,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            bulletin1: this.state.bulletin1,
            bulletin2: this.state.bulletin2,
            bulletin3: this.state.bulletin3,
            LandlordId: this.state.lId
        })
            .then(res => alert("Property '" + res.data.street + "' Saved"))
            .catch(err => console.log(err));
    }

    handleProperty(e) {
        e.preventDefault();
        API.showProperty(this.state.lId)
            .then(res => {
            this.setState({
                property: res.data
            })
        })
            .then(err => console.log(this.state.property))
            .catch(err => console.log(err));
    };

    // handleBulletinChange(e) {
    //     e.preventDefault();
    //     API.changeBulltin()

    // }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Navbar s={3} right>
                            <NavItem href='Read-Me.html'>{this.props.user.email}</NavItem>
                            <NavItem type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</NavItem>
                        </Navbar>

                        <Navbar s={9} left>
                            <NavItem href='/'><Icon left={true}>home</Icon>Home</NavItem>
                            <NavItem href='rent-reminder.html'><Icon left={true}>attach_money</Icon>Rent Reminder</NavItem>

                            <Modal
                            header='New Property'
                            trigger={<NavItem><Icon left={true}>home</Icon>Add a Property</NavItem>}>
                            <form onSubmit={this.addProperty}>
                            <Row>
                                <Input s={10} label="Street" validate
                                    onChange={this.handleChange}
                                    name="street">
                                </Input>
                                <Input s={2} label="Unit/Apt No" validate
                                    onChange={this.handleChange}
                                    name="unit">
                                </Input>
                            </Row>
                            <Row>
                                <Input s={4} label="City" 
                                    onChange={this.handleChange}
                                    name="city">
                                </Input>
                                <Input s={4} label="State"
                                    onChange={this.handleChange}
                                    name="state">
                                </Input>
                                <Input s={4} label="Zip"
                                    onChange={this.handleChange}
                                    name="zip">
                                </Input>
                            </Row>

                            <h4>Stuff Your Tenant Should Know:</h4>
                            <Row>
                                <Input s={12} label="Utilites?"
                                    onChange={this.handleChange}
                                    name="bulletin1">
                                </Input>
                                <Input s={12} label="Amenities?"
                                    onChange={this.handleChange}
                                    name="bulletin2">
                                </Input>
                                <Input s={12} label="Miscellaneous..."
                                    onChange={this.handleChange}
                                    name="bulletin3">
                                </Input>
                            </Row>

                                <Button waves='light'>Submit<Icon right>send</Icon></Button>
                            </form>
                        </Modal> 

                       <NavItem onClick={this.handleProperty}><Icon left={true}>announcement</Icon>Show Properties</NavItem>
                    
                    
                    <Modal
                    header='View Tickets'
                    trigger={<NavItem><Icon left={true}>view_list</Icon>Repair Tickets<Badge newIcon>{this.state.ticket.length}</Badge></NavItem>}>
                        <Table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Solved?</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.ticket.map(ticket => (
                            <tr key={ticket.id}>
                                <td>{ticket.title}</td>
                                <td>{ticket.body}</td>
                                <td><Input name='group1' type='checkbox' label='Solved' className='filled-in' />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        </Table>
                    
                </Modal>    
                    
                    </Navbar>                      
                    </Row>

                    <Row>
                    {this.state.property.map(property => 
                        <Collection key = {property.id}
                        header={`${property.street} #${property.unit}, ${property.city}, ${property.state} ${property.zip}`}
                        >
                        {property.bulletin1 ? (
                            <CollectionItem>{property.bulletin1}</CollectionItem>
                        ) : (
                            <CollectionItem>No Content</CollectionItem>
                        )}
                        {property.bulletin2 ? (
                            <CollectionItem>{property.bulletin2}</CollectionItem>
                        ) : (
                            <CollectionItem>No Content</CollectionItem>
                        )}
                        
                        {property.bulletin3 ? (
                            <CollectionItem>{property.bulletin3}
                            <a href="#!" className="secondary-content"><Icon>clear</Icon></a>
                            <a href="#!" className="secondary-content"><Icon>edit</Icon></a>
                            </CollectionItem>
                        ) : (
                            <CollectionItem>No Content
                            <a href="#!" className="secondary-content"><Icon>clear</Icon></a>
                            <a href="#!" className="secondary-content"><Icon>edit</Icon></a>
                            </CollectionItem>
                        )}
                        </Collection>
                    )}


                    </Row>

                    <Row>
                        <Slider interval={2000}>
                            <Slide
                                src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA1DAAAAJDQxODRmNjkwLTg4YTQtNDIzNy05ZTdhLTMyOGY1YTQyZGY5Mg.jpg"
                                title={`Welcome ${this.props.user.firstname}`} placement="left">
                                <p>This is your Property Management Portal.</p>
	                        </Slide>
                            <Slide
                                src="http://www.smartcondomanagement.com/content/uploads/2014/10/TheLandlord_zpse246c3d1.jpg"
                                title="Access all your properties and tenants in one place!"
                                placement="left">
                                <p>Communicating with tenants has never been easier!</p>
	                        </Slide>
                            <Slide
                                src="https://seda.college/wp-content/uploads/landlord.jpg"
                                title="Let's get started"
                                placement="left">
                                <p>Just use the menus above.</p>
	                    </Slide>
                        </Slider>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default withAuth(LandlordMain);