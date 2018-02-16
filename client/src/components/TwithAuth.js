import React, { Component } from 'react';
import TAuthService from './TAuthService';

export default function TwithAuth(TAuthComponent) {
    const Auth = new TAuthService('https://communitysteward.herokuapp.com');
    return class TAuthWrapped extends Component {

        constructor() {
            super();
            this.state = {
                user: null
            }
        }

        componentWillMount() {
            if (!Auth.loggedIn()) {
                this.props.history.replace('/tlogin')
            }
            else {
                try {
                    const profile = Auth.getProfile()
                    this.setState({
                        user: profile
                    })
                }
                catch(err){
                    Auth.logout()
                    this.props.history.replace('/tlogin')
                }
            }
        }

        render() {
            if (this.state.user) {
                return (
                    <TAuthComponent history={this.props.history} user={this.state.user} />
                )
            }
            else {
                return null
            }
        }
    }
}