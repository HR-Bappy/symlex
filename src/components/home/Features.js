import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import featureImg from '../../images/features/mobilesamll.webp';

import featuresone from '../../images/features/1small.png'
import featuresTwo from '../../images/features/2small.png'
import featuresThree from '../../images/features/3small.png'
import featureFour from '../../images/features/4small.png'
import featureFive from '../../images/features/5small.png'
import featureSix from '../../images/features/6small.png'

function Features() {
    return (
        <div className="features"  id="feature">
            <div className="feature-title text-center">
                <p>What Can We Do For You?</p>
            </div>
            <div className="features-image text-center">
                <img src={featureImg} alt="Features "/>
                <span id="Features"> </span>
            </div>
            <Container fluid>
                <Row >
                    <Col md={1}> 
                    </Col>
                    <Col md={10}> 
                    <Row> 
                    <Col md={4}>
                        <div className="single-features"> 
                        <div className="features-service-image">
                        <img src={featuresone} alt="Features  one"/>
                        </div>
                        <div className="features-single-title">
                            <p>Seamless Connection Anywhere</p>
                        </div>
                        <div className="features-single-content">
                            <p>Stream, Download and Game, enjoy seamless speed from anywhere</p>
                        </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="single-features"> 
                        <div className="features-service-image">
                        <img src={featuresTwo} alt="Features  two"/>
                        </div>
                        <div className="features-single-title">
                            <p>Stay Anonymous When Browsing</p>
                        </div>
                        <div className="features-single-content">
                            <p>Military grade encryptions for ultra protection of your data and secure browsing experience</p>
                        </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="single-features"> 
                        <div className="features-service-image">
                        <img src={featuresThree} alt="Features  two"/>
                        </div>
                        <div className="features-single-title">
                            <p>Break the Barrier</p>
                        </div>
                        <div className="features-single-content">
                            <p>Access region blocked services of various social media platforms</p>
                        </div>
                        </div>
                    </Col>
                    <Col md={1}> 
                    </Col>
                    </Row>
                    </Col>
                </Row>

                <Row className="mt-5">
                <Col md={1}> 
                    </Col>
                    <Col md={10}> 
                    <Row> 
                    <Col md={4}>
                        <div className="single-features"> 
                        <div className="features-service-image">
                        <img src={featureFour} alt="Features  two"/>
                        </div>
                        <div className="features-single-title">
                            <p>Secure Wi-Fi Connection</p>
                        </div>
                        <div className="features-single-content">
                            <p>Protect your devices from threats whether you are browsing from home, work or in public</p>
                        </div>
                        </div>
                    </Col>
                    
                    <Col md={4}>
                        <div className="single-features"> 
                        <div className="features-service-image">
                        <img src={featureFive} alt="Features  two"/>
                        </div>
                        <div className="features-single-title">
                            <p>Access Content</p>
                        </div>
                        <div className="features-single-content">
                            <p>Unblock your favorite apps, websites and games and enjoy</p>
                        </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="single-features"> 
                        <div className="features-service-image">
                        <img src={featureSix} alt="Features  two"/>
                        </div>
                        <div className="features-single-title">
                            <p>Block Hacks, Malware & Phishing</p>
                        </div>
                        <div className="features-single-content">
                            <p>Tackle these common threats with Symlex Protection</p>
                        </div>
                        </div>
                        </Col>
                    <Col md={1}> 
                    </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
            <div className="access-area text-center">
         <div className="access-title">
            <p>Access Servers With A Touch</p>
        </div>
        <div className="access-sub-title">
            <p>60+ Servers in 5 Countries </p>
        </div>
        <div className="access-content">
            <p>Explore new horizons and enjoy your favorite websites, <br/>apps and streaming platforms from anywhere in the world</p>
        </div>
            </div>
        </div>
    )
}

export default Features
