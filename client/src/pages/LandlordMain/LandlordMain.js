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

    handleBulletinCreate(e) {
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
                        <NavItem href='/'><Icon left={true}>home </Icon>Home</NavItem>
                            <NavItem href='rent-reminder.html'><Icon left={true}>attach_money</Icon>Rent Reminder</NavItem>
                            
                            <Modal
                                header='New Bulletin'
                                trigger={<NavItem><Icon left={true}>announcement</Icon>Bulletin</NavItem>}>
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
