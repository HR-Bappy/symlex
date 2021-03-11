import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
function  Pricing(){
    return(
        <div className="price-page">
            <Container>
                <div className="pricing-title text-center">
                    <p>Choose The Symlex Way Of Life</p>
                </div>
                <Row>
                    <Col lg={4} sm={4} xs={12}>
                        <div className="pricing-single text-center">
                            <div className="pricing-discount">
                                <p>10% OFF</p>
                            </div>
                            <div className="pricing-top-text">
                                <p>MONTHLY</p>
                            </div>
                            <div className="pricing-price">
                                $4.50
                            </div>
                            <div className="pricing-footer-content">
                                <p> Billed Total $4.50 <br/>  72 hours money back Guarantee</p>
                            </div>
                            <a href="https://pay.symlexvpn.net/checkout/795" target="_blank" rel="nofollow" className="btn pricing-btn">Get Started</a>

                        </div>
                    </Col>

                    <Col lg={4} sm={4} xs={12}>
                        <div className="pricing-single text-center">
                            <div className="pricing-discount">
                                <p> 26% OFF</p>
                            </div>
                            <div className="pricing-top-text">
                                <p>3 MONTHS PLAN</p>
                            </div>
                            <div className="pricing-price">
                                $9.99
                            </div>
                            <div className="pricing-footer-content">
                                <p> Billed 3.33 per month <br/> 72 hours money back <br/>Guarantee</p>
                            </div>
                            <a  href="https://pay.symlexvpn.net/checkout/796" target="_blank" rel="nofollow" className="btn pricing-btn">Get Started</a>
                        </div>
                    </Col>

                    <Col lg={4} sm={4} xs={12}>
                        <div className="pricing-single text-center">
                            <div className="pricing-discount">
                                <p>33% OFF</p>
                            </div>
                            <div className="pricing-top-text">
                                <p>6 MONTHS PLAN</p>
                            </div>
                            <div className="pricing-price">
                                $17.99
                            </div>
                            <div className="pricing-footer-content">
                                <p> Billed 3.00 per month <br/> 72 hours money back <br/>Guarantee</p>
                            </div>
                            <a href="https://pay.symlexvpn.net/checkout/797" target="_blank" rel="nofollow" className="btn pricing-btn">Get Started</a>

                        </div>
                    </Col>
                </Row>

                <Row className="mt-5 mb-5">
                    <Col lg={4} sm={4} xs={12}>
                        <div className="pricing-single text-center">
                            <div className="pricing-discount">
                                <p>48% OFF</p>
                            </div>
                            <div className="pricing-top-text">
                                <p>12 MONTHS PLAN</p>
                            </div>
                            <div className="pricing-price">
                                $27.99
                            </div>
                            <div className="pricing-footer-content">
                                <p> Billed 2.30 per month <br/> 72 hours money back <br/>Guarantee</p>
                            </div>
                            <a href="https://pay.symlexvpn.net/checkout/798" target="_blank" rel="nofollow" className="btn pricing-btn">Get Started</a>
                        </div>
                    </Col>

                    <Col lg={4} sm={4} xs={12}>
                        <div className="pricing-single text-center">
                            <div className="pricing-discount">
                                <p>68% OFF</p>
                            </div>
                            <div className="pricing-top-text">
                                <p>24 MONTHS PLAN</p>
                            </div>
                            <div className="pricing-price">
                                $34.99
                            </div>
                            <div className="pricing-footer-content">
                                <p> Billed 1.44 per month <br/> 72 hours money back <br/>Guarantee</p>
                            </div>
                            <a href="https://pay.symlexvpn.net/checkout/799" target="_blank" rel="nofollow" className="btn pricing-btn">Get Started</a>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export  default Pricing;