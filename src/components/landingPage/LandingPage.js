import React from 'react';
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';

import './LandingPage.css';

import JumbotronImg from '../../images/jumbotron.jpg';
import JanineHomemade from '../../images/janineHomemade.jpg';
import YogaByTaryn from '../../images/yogaByTaryn.jpg';
import PlantCare from '../../images/plantCare.jpg';
import Poetry from '../../images/poetry.jpg';
import CulinaryChris from '../../images/culinaryChris.jpg';

class LandingPage extends React.Component {
  render() {
    return (
        <div>
            <Jumbotron style={{ backgroundImage: `url(${JumbotronImg})`, backgroundSize: 'cover' }} className="jumbotron" fluid>
                <Container fluid className="vertical-center">
                    <h1 className="display-3">Locals. Learning. Live</h1>
                    <p className="lead">
                        <Button href="/explore" color="dark">EXPLORE</Button>
                    </p>
                </Container>
            </Jumbotron>
            <Container fluid>
                <Row> 
                    <h2 className="title">Find an Instructor</h2>
                </Row>
                <Row>
                    <p className="sub">Can't get to your usual class? Whether it's to excite or educate, there's something for everyone!</p>
                </Row>
                <Row>
                    <Col>
                        <a className="linkHover" href="/instructors">
                            <figure className="class">                           
                                <img src={ JanineHomemade } alt="Janine Homemade" className="classImg" />
                                <figcaption>Janine Homemade</figcaption>
                            </figure>
                        </a>
                    </Col>
                    <Col>
                        <a className="linkHover" href="/instructors">
                            <figure className="class">                            
                                <img src={ YogaByTaryn } alt="Yoga by Taryn" className="classImg" />
                                <figcaption>Yoga By Taryn</figcaption>
                            </figure>
                        </a>
                    </Col>
                    <Col>
                        <a className="linkHover" href="/instructors">
                            <figure className="class">
                                <img src={ PlantCare } alt="Plant Care" className="classImg" />
                                <figcaption>Plant Care</figcaption>
                            </figure>
                        </a>
                    </Col>
                    <Col>
                        <a className="linkHover" href="/instructors">
                            <figure className="class">
                                <img src={ Poetry } alt= "Poetry" className="classImg" />
                                <figcaption>Poetry</figcaption>
                            </figure>
                        </a>
                    </Col>
                    <Col>
                        <a className="linkHover" href="/instructors">
                            <figure className="class">
                                <img src={ CulinaryChris } alt="CulinaryChris" className="classImg" />
                                <figcaption>Culinary Chris</figcaption>
                            </figure>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default LandingPage;