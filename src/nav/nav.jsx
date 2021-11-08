import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './nav.scss';

/*     function createPopupWin(pageURL, pageTitle,
        popupWinWidth, popupWinHeight) {
        var left = (screen.width - popupWinWidth) / 2;
        var top = (screen.height - popupWinHeight) / 4;

        var myWindow = window.open(pageURL, pageTitle,
            'resizable=yes, width=' + popupWinWidth
            + ', height=' + popupWinHeight + ', top='
            + top + ', left=' + left);
    } */

class PopupExample extends React.Component {
    render() {
        return (
            <div className="popup-parent">
                <div className="prepopup">
                    <div className="popup">
                        <form>
                            Login: <input type="text" name="user_id" placeholder="Login" />
                            <br />
                            Password: <input type="password" name="password" placeholder="Password" />
                        </form>
                        <button onClick={this.props.closePopup}>Exit&times;</button>
                    </div>
                </div>
            </div>
        );
    }
}
class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }
    render() {
        return (
            <div className="app">
                <nav className="navbar">
                    <a href="/">
                        <button className="logo-button">
                            <strong className="strong">Monday</strong>
                        </button>
                    </a>

                    <div className="hamburger">
                        <span className="bar"></span>
                        <br />
                        <span className="bar"></span>
                        <br />
                        <span className="bar"></span>
                    </div>

                    <div className="navbar-links">
                        <ul>
                            {' '}
                            <Link className="text-link" to="/he">
                                <li>For him</li>
                            </Link>
                            <Link className="text-link" to="/she">
                                <li>For her</li>
                            </Link>
                            <Link className="text-link" to="/kids">
                                <li>Kids</li>
                            </Link>
                            <Link className="text-link" to="/sale">
                                <li>Sale</li>
                            </Link>
                            <li onClick={this.togglePopup.bind(this)}>login</li>
                        </ul>
                    </div>

                    <form action="#" className="shoppng-cart-container">
                        <button className="shopping-cart-button">
                            <i className="fa fa-shopping-cart cart-font"></i>
                            <div className="cart_number">0</div>
                        </button>
                    </form>
                </nav>

                {this.state.showPopup ? <PopupExample closePopup={this.togglePopup.bind(this)} /> : null}
            </div>
        );
    }
}

export default withRouter(Nav);
