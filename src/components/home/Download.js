import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import device from '../../images/device-small.webp';
import Desktop from '../../images/download/windows-small.png';
import Iso from '../../images/download/iso-small.png';
import Android from '../../images/download/android-small.png';
function Download() {
function change_css()
{
    let a=document.getElementById('submenu');
    if(a.style.display==='block')
    {
        a.style.display='none'
    }
    else{
        a.style.display='block'
    }


}
    return (
        <div className="download">
<Container fluid>
    <Row>
       <Col md={1}></Col>
<Col md={5} xs={12}>
    <div className="download-left"> 
<div className="download-title">
    <p>Easy To Use & Accessible on All Platforms </p>
</div>
<div className="download-subtitle">
    <p>Open the SymlexVPN app, sign up, select the country of your choice and browse away. It’s that Simple! </p>
</div>
<div className="download-icon">
<ul>
    <li><a style={{color: "white"}}  href="https://download.akbertraders.com/symlex-vpn-desktop.zip"> <img src={Desktop} alt="desktop"/> <br/> <br/> Windows</a></li>
    <li><a style={{color: "white"}} target="_blank" href="https://apps.apple.com/us/app/symlex-vpn/id1476025535"> <img src={Iso} alt="ISO"/> <br/> <br/> ISO</a></li>
    <li><a style={{color: "white"}} target="_blank" href="https://play.google.com/store/apps/details?id=app.kismyo.vpn&hl=en"> <img src={Android} alt="Android"/> <br/> <br/> Android</a></li>
</ul>
</div>

<div className="button-group text-center">
   <div className="main-download"><a className="download-btn" target="_blank" href="https://play.google.com/store/apps/details?id=app.kismyo.vpn&hl=en"> Android </a> <span className="down-arrow" onClick={change_css}> &darr;</span></div>
       <span id='submenu'>
        <a className="download-btn" target="_blank" href="https://apps.apple.com/us/app/symlex-vpn/id1476025535"> iPhone</a>
        <a className="download-btn" href="https://download.akbertraders.com/symlex-vpn-desktop.zip"> Windows</a>
</span>
</div>
</div>
</Col>

<Col md={6} xs={12}>
<div className="Download-showcase">

    <img loading="lazy" src={device} alt="device"/>

    <picture>
        <source srcSet={device} media="(min-width: 1000px)"/>
            <source srcSet={Desktop} media="(min-width: 800px)"/>

    </picture>


</div>
</Col>
</Row>
</Container>
        </div>
    )

}

export default Download
