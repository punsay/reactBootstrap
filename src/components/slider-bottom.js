import { Carousel } from "react-bootstrap";
import React from "react";

const SliderBottom = () => {
    return (
        <div className="slider">
            <Carousel>
                <Carousel.Item>
                    <img src="src/images/b1.png" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="src/images/b2.png" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="src/images/b3.png" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SliderBottom;