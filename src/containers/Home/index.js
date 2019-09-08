import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from '../../components/bootstrapComponents';

const Home = () => (
    <div id="home_wrapper">
        <Container className="homePage">
            <Row>
                <Col>
                    <h5>
                        <FormattedMessage id="app.homePage" description="Home Page" />
                    </h5>
                </Col>
            </Row>

        </Container>
    </div>
);

export default Home;
