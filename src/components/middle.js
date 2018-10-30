import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


const Middle = () => {
    return (
        <div>
            <Grid>
                <Row >
                    <Col xs={6} >
                        <img src="src/images/a1.png" />
                    </Col>
                    <Col xs={6} md={4}>
                        <img src="src/images/a2.png" />
                    </Col>
                </Row>
                <Row >
                    <Col xs={6}>
                        <img src="src/images/a3.png" />
                    </Col>
                    <Col xs={6}>
                        <img src="src/images/a4.png" />
                    </Col>
                </Row>

            </Grid>
        </div>
    );

}

export default Middle; 