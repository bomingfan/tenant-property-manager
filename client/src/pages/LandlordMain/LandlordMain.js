import React, { Component } from "react";
import "./LandlordMain.css";
import Footer from '../../components/Footer';
import AuthService from '../../components/AuthService';
import withAuth from '../../components/withAuth';
import { Container, Row, Slider } from 'react-materialize';
import { Icon, Input, Navbar, NavItem, Slide, Modal, Button } from 'react-materialize';
import API from "./../../utils/API";


const Auth = new AuthService();

class LandlordMain extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleBulletinCreate = this.handleBulletinCreate.bind(this);
        this.addProperty = this.addProperty.bind(this);
    } 
    handleBulletinCreate(){
    }

    handleLogout(){
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
            title1: this.state.title1,
            body1: this.state.body1,
            title2: this.state.title2,
            body2: this.state.body2,
            title3: this.state.title3,
            body3: this.state.body3,
            LandlordId: Number.parseInt(this.props.user.id, 10)
        })
        .then(res => alert("Property '" + res.data.street + "' Saved"))
        .catch(err => console.log(err));
    }

    handleProperty(e) {
        e.preventDefault();
        API.saveBulletin({
            title: this.state.title,
            body: this.state.body,
            LandlordId: Number.parseInt(this.props.user.id, 10)
        })
            .then(res => alert("Bulletin '" + res.data.title + "' Saved"))
            .catch(err => console.log(err));
    };

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
                                <Input s={2} label="Title"
                                    onChange={this.handleChange}
                                    name="title1">
                                </Input>
                     
                        
                                <Input s={10} label="Body"
                                    onChange={this.handleChange}
                                    name="body1">
                                </Input>
                            </Row>
                            <Row>
                                <Input s={2} label="Title"
                                    onChange={this.handleChange}
                                    name="title2">
                                </Input>
                     
                        
                                <Input s={10} label="Body"
                                    onChange={this.handleChange}
                                    name="body2">
                                </Input>
                            </Row>
                            <Row>
                                <Input s={2} label="Title"
                                    onChange={this.handleChange}
                                    name="title3">
                                </Input>
                     
                        
                                <Input s={10} label="Body"
                                    onChange={this.handleChange}
                                    name="body3">
                                </Input>
                            </Row>
                                <Button waves='light'>Submit<Icon right>send</Icon></Button>
                            </form>
                        </Modal> 

                            <Modal
                                header='Bulletins'
                                trigger={<NavItem><Icon left={true}>announcement</Icon>Bulletins</NavItem>}>
                                <form onSubmit={this.handleBulletinCreate}>
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

                            
                            <NavItem href='view-repair.html'><Icon left={true}>view_list</Icon>Repair Tickets</NavItem>
                        </Navbar>                      
                    </Row>

                    <Row>
                        <Slider options={{fullscreen: false}}>
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

export default withAuth(LandlordMain);