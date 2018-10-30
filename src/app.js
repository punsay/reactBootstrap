import React, { Component } from 'react';
import NavBar from './components/navigation';
import Slider from './components/slider';
import TopHead from './components/top';
import SliderBottom from './components/slider-bottom';
import Middle from './components/middle';
import { Grid, Row, Col } from 'react-bootstrap';
import './components/css/custom.css';
import Footer from './components/footer';

class App extends Component {

    render() {
        return (
            <div>
                <TopHead />
                <NavBar />
                <Grid>
                    <Row>
                        <Col md={8}>
                            <Slider />
                        </Col>
                        <Col md={4}>
                            <ul>
                                <li> <img className="sideImage" src="src/images/j1.jpg" /></li>
                                <li> <img className="sideImage" src="src/images/j2.jpg" /></li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
                <SliderBottom />
                <Middle />
                <Footer />
            </div>
        )
    }
}

export default App;
