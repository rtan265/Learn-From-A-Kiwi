import React from 'react';
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';

import './LandingPage.css';
import Footer from '../footer/Footer';

import JumbotronImg from '../../images/jumbotron.jpg';
import JanineHomemade from '../../images/janineHomemade.jpg';
import YogaByTaryn from '../../images/yogaByTaryn.jpg';
import PlantCare from '../../images/plantCare.jpg';
import Poetry from '../../images/poetry.jpg';
import CulinaryChris from '../../images/culinaryChris.jpg';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
        <div style={{backgroundColor: "#eff0f2"}}>
            <Jumbotron style={{ backgroundImage: `url(${JumbotronImg})`, backgroundSize: 'cover' }} fluid>
                <Container fluid className="vertical-center">
                    <h1 className="display-3">Locals. Learning. Live</h1>
                    <p className="lead">
                        <Button href="/explore" color="dark">EXPLORE</Button>
                    </p>
                </Container>
            </Jumbotron>
            <Container fluid className="containerBg">
                <Row> 
                    <h2 className="title">Find an Instructor</h2>
                </Row>
                <Row>
                    <p className="sub">Can't get to your usual class? Whether it's to excite or educate, there's something for everyone!</p>
                </Row>
                <Row>
                    <Col>
                        <Link className="linkHover" to="/instructors">
                            <figure className="class">                           
                                <img src={ JanineHomemade } alt="Janine Homemade" className="classImg" />
                                <figcaption>Janine Homemade</figcaption>
                            </figure>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/instructors">
                            <figure className="class">                            
                                <img src={ YogaByTaryn } alt="Yoga by Taryn" className="classImg" />
                                <figcaption>Yoga By Taryn</figcaption>
                            </figure>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/instructors">
                            <figure className="class">
                                <img src={ PlantCare } alt="Plant Care" className="classImg" />
                                <figcaption>Plant Care</figcaption>
                            </figure>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/instructors">
                            <figure className="class">
                                <img src={ Poetry } alt= "Poetry" className="classImg" />
                                <figcaption>Poetry</figcaption>
                            </figure>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/instructors">
                            <figure className="class">
                                <img src={ CulinaryChris } alt="CulinaryChris" className="classImg" />
                                <figcaption>Culinary Chris</figcaption>
                            </figure>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="containerBg">
                <Row> 
                    <h2 className="title">Browse classes by subject</h2>
                </Row>
                <Row className="subjectContainer">
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#e49b53"}}><h3>Art</h3></div>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#8cb85f"}}><h3>Eco-living</h3></div>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#d6a4e4"}}><h3>Yoga</h3></div>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#ff5757"}}><h3>Language</h3></div>   
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#ffde59"}}><h3>Cooking</h3></div>    
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#4790f1"}}><h3>Wellness</h3></div>    
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="containerBg">
                <Row>
                    <h2 className="title">Why learn from a Kiwi?</h2>
                </Row>
                <Row>
                    <Col>
                        <h4 className="lllTitle">Locals</h4>
                        <div className="lll">
                            <p className="lllText">Community has never been more important. <br/> Classes taught by locals for locals. <br/> LearnFromA.Kiwi allows you to enjoy the classes you'd usually take in person (and some you wouldn't) from the comfort of your own home.</p>
                        </div>
                    </Col>
                    <Col>
                        <h4 className="lllTitle">Learning</h4>
                        <div className="lll">
                            <p className="lllText">There's never been a better time to learn a new skill or try something just for fund! <br/> We make learning easy by bringing it to your lounge</p>
                        </div>
                    </Col>
                    <Col>
                        <h4 className="lllTitle">Live</h4>
                        <div className="lll">
                            <p className="lllText">It's time to feel CONNECTED! Our live classes allow you to have some of that actual human connection we're all craving. <br/> Live to your living room.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
  }
}

export default LandingPage;