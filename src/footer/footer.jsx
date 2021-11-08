import React from 'react';
import './footer.scss';

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-title">THE BEST PRODUCTS ONLY WITH US</div>
                <div className="grid-st-nd-columns">
                    <div>CONTACT</div>
                    <br />
                    <div className="img-container">
                        <i className="fa fa-phone"></i>
                    </div>
                    <div className="phone_number">22 333 44 55</div>
                    <div className="shop-open">
                        Mon – Fri
                        <br /> 8:00am – 20:30am
                    </div>
                </div>
                <div className="grid-st-nd-columns">
                    <div>GUARANTEE OF QUALITY</div>
                    <br />
                    <div className="img-container">
                        <i className="fas fa-check"></i>
                    </div>
                    <div>We have been satisfying our customers with the highest quality products for 20 years</div>
                </div>
                <div className="shipment">
                    <div>SHIPMENT</div>
                    <br />
                    <div className="img-container">
                        <i className="fas fa-shipping-fast"></i>
                    </div>
                    <div>Free shipping for orders over 50 EURO!</div>
                </div>

                <div className="social-container1">
                    <div className="find">FIND US</div>
                    <div className="social_inline">
                        <a className="social-container2 fb" href="https://www.facebook.com/adidasoriginals">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="social-container2 ig" href="https://www.instagram.com/adidas/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="social-container2 snap" href="https://www.snapchat.com/add/adidasoriginals">
                            <i className="fab fa-snapchat-square"></i>
                        </a>
                        <a
                            className="social-container2 yt"
                            href="https://www.youtube.com/channel/UCuLUOxd7ezJ8c6NSLBNRRfg"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-all-rights-reserved">
                    Copyright 2021 Monday <br />
                    &copy; All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
