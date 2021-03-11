import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import Android from '../../images/download/google-play-small.png'
import Iphone from '../../images/download/iphone-small.png'
function Counter() {
    return (
        <div className="counter">
            <Container>
            <div className="counter-title text-center">
                <p>An Easy to Use and Effective VPN App </p>
            </div>
            <div className="counter-sub-title text-center">
                <p>Enjoy greater protection and faster streaming </p>
            </div>
            <div className="counter-block-section">
            <Row>
            <Col md={4} xs={4}>
                       <div className="Counter-single-block">
                        <div className="Counter-number f-30">
                           <p>170K+ </p> 
                        </div>
                        <div className="counter-text ">
                          <p>Subscribed </p>  
                        </div>
                    </div>
                </Col>
                <Col md={4} xs={4}>
                    <div className="Counter-single-block">
                        <div className="Counter-number">
                           <p>80K+ </p> 
                        </div>
                        <div className="counter-text ">
                          <p>Free Users </p>  
                        </div>
                    </div>
                </Col>

                <Col md={4} xs={4}>
                    <div className="Counter-single-block">
                        <div className="Counter-number">
                           <p>100K+ </p> 
                        </div>
                        <div className="counter-text ">
                          <p>Downloads </p>  
                        </div>
                    </div>
                </Col>
            </Row>
            </div>
     <p className="counter-download text-center"> <span className='counter-full-width'> DOWNLOAD TODAY </span> <span> <a href="https://play.google.com/store/apps/details?id=app.kismyo.vpn&hl=en"> <img src={Android} alt="android"/>  </a> </span> <span> <a href="https://apps.apple.com/us/app/symlex-vpn/id1476025535"><img src={Iphone} alt="iphone"/> </a> </span> </p>

            </Container>
        </div>
    )
}

export default Counter
