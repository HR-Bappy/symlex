import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

import instagram from '../../images/icon/instagram.png';
import facebook from '../../images/icon/facebook.png';
import linkdine from '../../images/icon/linkdine.png';
import Twitter from '../../images/icon/twitter.png';
import youtube from '../../images/icon/youtube.png';
import whatsapp from '../../images/icon/whatsapp.png';

function Footer() {
    return (
        <footer>
            <Container fluid>

                <Row className="flex-box-css">
                    <Col md={1}> </Col>
                    <Col md={2}>
                        <div className="footer-single-block">
                            <div className="footer-title">
                                <p>Company</p>
                            </div>
                            <div className="footer-ui">
                                <ul>
                                    <li><a href="https://symlexvpn.net/blog/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="https://symlexvpn.net/blog/terms-of-service">Terms of Service</a></li>
                                    <li><a href="https://symlexvpn.net/blog/refund-policy/">Refund Policy</a></li>
                                    <li><a href="https://symlexvpn.net/blog/faqs/">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col md={2}>
                        <div className="footer-single-block">
                            <div className="footer-title">
                                <p>Useful Links</p>
                            </div>
                            <div className="footer-ui">
                                <ul>
                                    <li><a href="https://symlexvpn.net/price">Pricing</a></li>
                                    <li><a href="https://symlexvpn.net/blog/disclaimer">Disclaimer</a></li>
                                    <li><a href="https://symlexvpn.net/blog/ios-update">iOS Update</a></li>
                                    <li><a href="https://symlexvpn.net/blog/android-update">Android Update</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col md={2}>
                        <div className="footer-single-block">
                            <div className="footer-title">
                                <p>Sales Contact</p>
                            </div>
                            <div className="footer-ui">
                                <ul>
                                    <li><img style={{height: '17px'}} src={whatsapp} alt="Twitter"/>+880 1829 882 427
                                    </li>
                                    <li><img style={{height: '17px'}} src={whatsapp} alt="Twitter"/>+880 1798 787 948
                                    </li>
                                    <li>sales@symlexvpn.com</li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col md={2}>
                        <div className="footer-single-block">
                            <div className="footer-title">
                                <p>Support Contact</p>
                            </div>
                            <div className="footer-ui">
                                <ul>
                                    <li><img style={{height: '17px'}} src={whatsapp} alt="Twitter"/>+880 1684 077 496
                                    </li>
                                    <li><img style={{height: '17px'}} src={whatsapp} alt="Twitter"/>+880 1771 130 473
                                    </li>
                                    <li><img style={{height: '17px'}} src={whatsapp} alt="Twitter"/>+880 1771 130 595
                                    </li>
                                    <li>support@symlexvpn.com</li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="footer-single-block">
                            <div className="footer-title">
                                <p>Follow Us</p>
                            </div>
                            <div className="footer-ui footer-social-icon">
                                <ul>
                                    <li><a href="https://www.instagram.com/symlexvpn/" target="_blank"><img
                                        src={instagram} alt="instagram"/></a></li>
                                    <li><a href="https://www.facebook.com/SymlexVPNdotcom" target="_blank"><img
                                        src={facebook} alt="facebook"/></a></li>
                                    <li><a href="https://twitter.com/SymlexV" target="_blank"><img src={Twitter}
                                                                                                   alt="Twitter"/></a>
                                    </li>
                                    <li><a href="https://www.linkedin.com/company/symlex-vpn/" target="_blank"><img
                                        src={linkdine} alt="linkdine"/></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCi19myUby2TIuM3zR0EEcFQ"
                                           target="_blank"><img src={youtube} alt="youtube"/></a></li>

                                </ul>
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>

        </footer>
    )
}

export default Footer
