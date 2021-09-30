import React from 'react';
import boot from '../../images/boot.png';

export const Home = () => {
    return (
        <>
            <header>
                <div className="image-box">
                    <div className="sale-circle">
                        <span>All products -50%</span>
                        <br />
                        <span className="code">CODE:123ABC</span>
                    </div>
                </div>
            </header>

            <main>
                <div className="main-middle-part-container">
                    <div className="middle-part-section1">
                        <div id="new-products">NEW COLLECTION</div>
                        <div className="middle-part-container-child2">
                            <button className="product1-1" href="https://google.com">
                                product1
                            </button>
                            <button className="product1-2">product2</button>
                            <button className="product1-3">product3</button>
                            <button className="product1-4">product4</button>
                        </div>
                    </div>
                    <div className="products-container">
                        <div className="products-title">BESTSELLERS</div>
                        <div className="products-list">
                            <div className="product-border-hover">
                                <a className="product" href="https://google.com">
                                    <img src={boot} alt="boot" />
                                </a>
                                <div className="product-name">Product1</div>
                            </div>

                            <div className="product-border-hover">
                                <a className="product" href="https://google.com">
                                    <img src={boot} alt="boot" />
                                </a>
                                <div className="product-name">Product2</div>
                            </div>
                            <div className="product-border-hover">
                                <a className="product" href="https://google.com">
                                    <img src={boot} alt="boot" />
                                </a>
                                <div className="product-name">Product3</div>
                                <div className="product-description">Sale!</div>
                            </div>
                            <div className="product-border-hover">
                                <a className="product" href="https://google.com">
                                    <img src={boot} alt="boot" />
                                </a>
                                <div className="product-name">Product4</div>
                            </div>
                        </div>

                        <div className="products-title">BEST FOR SUMMER</div>
                        <div className="products-list">
                            <div className="product-border-hover">
                                <a className="product" href="https://google.com">
                                    <img src={boot} alt="boot" />
                                </a>
                                <div className="product-name">Product1</div>
                                <div className="product-description">New!</div>
                            </div>

                            <div className="product-border-hover">
                                <a className="product" href="https://google.com">
                                    <img src={boot} alt="boot" />
                                </a>
                                <div className="product-name">Product2</div>
                            </div>
                            <div className="product-border-hover">
                                <a className="product" href="https://google.com">
                                    <img src={boot} alt="boot" />
                                </a>
                                <div className="product-name">Product3</div>
                            </div>
                            <div className="product-border-hover">
                                <a className="product" href="https://google.com">
                                    <img src={boot} alt="boot" />
                                </a>
                                <div className="product-name">Product4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
