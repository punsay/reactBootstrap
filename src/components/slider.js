import React from 'react';
import { Carousel } from "react-bootstrap";
import './css/custom.css';

const Slider = () => {
    return (
        <div className="slider">
            <Carousel>
                <Carousel.Item>
                    <img className="mainImage" src="src/images/j1.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="mainImage" alt="900x500" src="src/images/j2.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="mainImage" alt="900x500" src="src/images/j1.jpg" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;
