import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import AboutLogo from '../../images/About-logo-small.png'
function About() {
    return (
        <div className="About">
            <Container fluid>
                <Row>
                    <Col md={{offset:2 , span:2}}>
                        <div className="About-logo">
                      <img loading="lazy" src={AboutLogo} alt="About logo"/>
                        </div>
                    </Col>
                    <Col md={{ offset:1,span:5}}>
                        <div className="About-content">
                        <span className="about-color-change">SymlexVPN’s</span> philosophy revolves around an individual’s privacy and security. Our focus when innovating,
                         has been dedicated to ensuring our customers’ security, providing them with the fastest services, 
                         and protecting them from the unpleasant hazards of an unsafe internet connection.<span className="about-color-change">
                         SymlexVPN </span>with a global customer base is a force to reckon with in the business of Internet and Data Security.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
