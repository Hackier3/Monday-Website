import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const Nav = (props) => {
    return (
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
                    <li>
                        <Link className="text-link" to="/he">
                            For him
                        </Link>
                    </li>
                    <li>
                        <Link className="text-link" to="/she">
                            For her
                        </Link>
                    </li>
                    <li>
                        <Link className="text-link" to="/kids">
                            Kids
                        </Link>
                    </li>
                    <li>
                        <Link className="text-link" to="/sale">
                            Sale
                        </Link>
                    </li>
                </ul>
            </div>

            <form action="#" className="shoppng-cart-container">
                <button className="shopping-cart-button">
                    <i className="fa fa-shopping-cart cart-font"></i>
                    <div className="cart_number">1</div>
                </button>
            </form>
        </nav>
    );
};

export default withRouter(Nav);
