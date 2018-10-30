import React, { Component } from 'react';
import './css/custom.css';
import { Grid, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Grid>
                <Row >
                    <Col xs={3} >
                        <ul>
                            <li><a href="#"><h4>DOWNLOAD THE APP</h4></a></li>
                            <li><img src="src/images/g1.png" /></li>
                            <li><img src="src/images/g2.png" /></li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <ul className="footer-2">
                            <li className="footerList-2"><a href="#"><h4>Jabong</h4></a></li>
                            <li className="footerList-2"><a href="#">Help/Support</a></li>
                            <li className="footerList-2"><a href="#">About Us</a></li>
                            <li className="footerList-2"><a href="#">Careers</a></li>
                            <li className="footerList-2"><a href="#">Gift Cards</a></li>
                            <li className="footerList-2"><a href="#">FAQs</a></li>
                            <li className="footerList-2"><a href="#">Refer and Earn</a></li>
                            <li className="footerList-2"><a href="#">Terms and Conditions Offers</a></li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <ul className="footer-3">
                            <li className="footerList-3"><h4>Our Policies</h4></li>
                            <li className="footerList-3"><a href="#">Terms and Conditions</a></li>
                            <li className="footerList-3"><a href="#">Privacy Policy </a></li>
                            <li className="footerList-3"><a href="#">Vendor Code of conduct</a></li>
                            <li className="footerList-3"><a href="#">Whitehat</a></li>
                            <li className="footerList-3"><a href="#">Deal of the day</a></li>
                        </ul>

                    </Col>
                    <Col xs={3}>

                    </Col>
                </Row>

            </Grid>
        </div>
    )

}

export default Footer;