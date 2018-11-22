import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="3">Credits: {this.props.auth.credits}</li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render(){
        console.log(this.props);
        return(
            <nav class="navbar navbar-expand-lg fixed-top navbar-costum navbar-dark">
                <div class="container"> <a class="navbar-brand white-text" href="index.html">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
                        Tesla rent2buy
                    </Link>
                </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav" id="navbar-example" role="tablist">
                            <li class="nav-item"><a href="#what-is" class="nav-link active">What is?</a></li>
                            <li class="nav-item"><a href="#features" class="nav-link">Features</a></li>
                            <li class="nav-item"><a href="#how-it-works" class="nav-link">How it works?</a></li>
                            <li class="nav-item"><a href="#more" class="nav-link">More</a></li>
                            <div class="d-lg-none d-xl-none mobile-langmenu">
                                <li class="nav-item title">Languages:</li>
                                <li class="nav-item"><a class="nav-link lang-bar" href="index.html">Lietuviškai</a></li>
                                <li class="nav-item"><a class="nav-link lang-bar" href="ru.html">Русский</a></li>
                                <li class="nav-item"><a class="nav-link lang-bar" href="en.html">English</a></li>
                            </div>
                        </ul>
                    </div>
                    <div class="ml-auto d-none d-lg-block"><a class="lang-bar" href="index.html">LT</a> <a class="lang-bar" href="ru.html">RU</a> <a class="lang-bar" href="en.html">EN</a></div>
                </div>
            </nav>
            // <nav>
            //     <div className="nav-wrapper">
            //         <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            //             Emaily
            //         </Link>
            //         <ul className="right">
            //             {this.renderContent()}
            //         </ul>
            //     </div>
            // </nav>
        );
    }
}

function mapStateToProprs({ auth }) {
    return {auth};
}

export default connect(mapStateToProprs)(Header);