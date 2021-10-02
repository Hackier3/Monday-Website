import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Popup from 'reactjs-popup';

const Nav = () => {
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
                    <PopupExample />
                </ul>
            </div>

            <form action="#" className="shoppng-cart-container">
                <button className="shopping-cart-button">
                    <i className="fa fa-shopping-cart cart-font"></i>
                    <div className="cart_number">0</div>
                </button>
            </form>
        </nav>
    );
};

const PopupExample = () => {
    const popup = () => {
        document.querySelector('body').style.overflow =
            document.querySelector('body').style.overflow === '' ? 'hidden' : '';
    };

    return (
        <Popup trigger={<li onClick={popup()}>Login</li>}>
            {(close) => (
                <div className="popup-parent">
                    <div className="prepopup">
                        <div className="popup">
                            login
                            <br />
                            password
                            <br />
                            <span
                                onClick={() => {
                                    close();
                                    popup();
                                }}
                            >
                                Exit&times;
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default withRouter(Nav);

/*     function createPopupWin(pageURL, pageTitle,
        popupWinWidth, popupWinHeight) {
        var left = (screen.width - popupWinWidth) / 2;
        var top = (screen.height - popupWinHeight) / 4;

        var myWindow = window.open(pageURL, pageTitle,
            'resizable=yes, width=' + popupWinWidth
            + ', height=' + popupWinHeight + ', top='
            + top + ', left=' + left);
    } */
