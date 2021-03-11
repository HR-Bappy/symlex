import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../../images/symlex-logo.png'
function Header() {
    function ToggleEvent()
    {
        let a=document.getElementById('main-menu');
        if(a.style.display==='inline-block')
        {
            a.style.display='none'
        }
        else{
            a.style.display='inline-block'
        }
    }

    return (
    <header>
<Container fluid>
    <Row>
        <Col md={2} xs={12} className="bg-white pb-1">
            <div className="main-logo">
                <Link to="/"><img src={logo} alt="Symlex Logo"/></Link>

            </div>

                <label onClick={ToggleEvent} className="mobile-menu-toggle"> &#9776;</label>


        </Col>

        <Col className="change-color" md={10}>

            <div id="main-menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#Features">Features</a></li>
                    <li><a href="/#about">About Us</a></li>
                    <li><Link to="/price">Pricing</Link></li>
                    <li><a href="/#download">VPN Apps</a></li>
                    <li><Link to="/affiliate">Affiliate</Link></li>
                    <li><a href="https://symlexvpn.net/blog/">Blog</a></li>
                    <li><a href="https://pay.symlexvpn.net/login">Login</a></li>
                </ul>
            </div>
        </Col>
    </Row>

</Container>

    </header>
    )
}

export default Header
