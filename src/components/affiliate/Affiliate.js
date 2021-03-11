import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import Affliliate from '../../images/affliliate.png'

import Galary1 from '../../images/galary/galary1.jpg'
// Import Swiper React components

import Coverflow from 'react-coverflow';

// Import Swiper styles
import 'swiper/swiper.scss';


function Affiliate() {
    const fn = function () {
        /* do your action */
      }
    return (

        <div className="Affiliate">
            <div className="affiliate-color">
                <Container>
                <div className="affiliate-program">
                    <Row>
                        <Col md={6}>
<div className="affiliate-title"> Affiliate</div>
<div className="affiliate-content-title">VPN reseller program</div>
   <div className="affiliate-content">
       <p> Take a competitive edge of the growing cybersecurity industry through partnering with privacy –
            on one of the best VPN reseller brands. Increase your earning through high customer satisfaction
             & create new opportunities of profitability</p>
   </div>

   <div className="affiliate-why">
       <ul>
           <li><img src={Affliliate}  alt="affiliate"/> Resale Partnerships </li>
           <li><img src={Affliliate}  alt="affiliate"/> VPN Bundling and Co-Branding </li>
           <li><img src={Affliliate} alt="affiliate"/> Custom Reseller Solutions </li>
       </ul>
   </div>
                        </Col>
<Col md={1}>

</Col>
                        <Col md={5}>
                            <div className="affiliate-form">
                                <div className="affiliate-form-title text-center">
                                    <p>Become a reseller</p>
                                </div>
                               
                            
                               
                                <form action="https://symlexvpn.com/oksel/public/affiliate" method="post">
                               
                             <div className="form-group">
                             <label >Name*</label>
                             <input type="text" className="affiliate-input-form" name="name" placeholder="Enter Full Name"/>
                             </div>

                             
                             <div className="form-group">
                             <label >Email*</label>
                             <input type="email" className="affiliate-input-form" name="email" placeholder="Enter Your Contact Email"/>
                             </div>
                             
                             <div className="form-group">
                             <label >Number</label>
                             <input type="text" className="affiliate-input-form" name="number" placeholder="Your Phone Number"/>
                             </div>
                             
                             <div className="form-group">
                             <label >WhatsApp</label>
                             <input type="text" className="affiliate-input-form" name="whatsapp" placeholder="Enter WhatsApp Number"/>
                             </div>
                             
                            <button className="affiliate-button text-center"> Send Request</button>
                         
                           
                                </form>
                            </div>
                            </Col>
                    </Row>
                    </div>
                    </Container>
                    </div>
                    <Container fluid>
                    
                    <Row>
                        <Col md={12}>
                            <div className="affiliate-reseller text-center"> 
                        <div className="affiliate-reseller-title">
                            <p>Reseller Panel Screenshort</p>
                        </div>
                        <div className="affiliate-sereenshort">

    <Coverflow width="100%" height="31.25rem" classes={{background: 'rgb(233, 23, 23)'}} className=''
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
  >
    <div
      onClick={() => fn()}
      onKeyDown={() => fn()}
      role="menuitem"
      tabIndex="0"
    >
      <img
       src={Galary1}
        alt='title or description'
        style={{
          display: 'block',
          width: '100%',
        }}
      />
    </div>
    <img src={Galary1} alt='7' data-action="https:zulkar.me"/>
    <img src={Galary1} alt='2' data-action="https:zulkar.me"/>
    <img src={Galary1} alt='74' data-action="https:zulkar.me"/>
    <img src={Galary1} alt='2' data-action="https:zulkar.me"/>
    <img src={Galary1} alt='7' data-action="https:zulkar.me"/>
    <img src={Galary1} alt='47' data-action="https:zulkar.me"/>
    <img src={Galary1} alt='2' data-action="https:zulkar.me"/>
    <img src={Galary1} alt='5' data-action="https:zulkar.me"/>
  </Coverflow>


                        </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
           
        </div>
    )
}

export default Affiliate
