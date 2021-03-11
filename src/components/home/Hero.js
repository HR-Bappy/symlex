import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import HeroImage from '../../images/hero.png'
function Hero() {
    return (
       <div className="Hero-area">
         <svg className="hero-svg" > <path fillRule="evenodd"  fill="rgb(235, 235, 235)" d="M1920.000,709.000 C1919.912,708.887 1770.736,582.308 1539.687,545.329 C1323.775,510.773 1168.002,593.491 882.277,405.768 C673.996,268.925 454.505,488.993 95.037,62.423 C49.490,8.373 0.299,0.604 0.299,0.604 L0.000,967.000 L1920.000,967.000 L1920.000,709.000 Z"/></svg>
           <Container fluid>
               <Row> 
                   <Col md={1}> </Col>
               <Col md={5} xs={12}>
                 <img className="hero-image" src={HeroImage} alt="Hero area "/>
               </Col>
              
               <Col md={5} xs={12}>
<div className="hero-right">
    <div className="Hero-title">
        <p> Seamless & Secured Connections</p>
    </div>
    <div className="hero-content">
        <p>SymlexVPN provides efficient encryption to your internet connection, maintaining seamless and fast connectivity as well as ensuring maximum security. Browse away, free of all worries. </p>
    </div>
    <Col xs={12} className="center-btn">
    <a href="https://pay.symlexvpn.net/checkout/796" className="btn hero-btn">Get Started Now</a>
    </Col>
</div>
                </Col>
                <Col md={1}> </Col>
                </Row>
           </Container>
       </div> 
    )
}

export default Hero
