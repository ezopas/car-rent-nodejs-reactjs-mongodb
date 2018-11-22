import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
    render(){
        return(
                <StripeCheckout name="Emaily" amount={500} token={token => this.props.handleToken(token)} stripeKey="pk_test_d5Curqbn14ii4YyGRIaRMht3">
                <button className="btn">
                    Add Credits
                </button>
                </StripeCheckout>
            )

    }
}

export default connect(null, actions)(Payments);