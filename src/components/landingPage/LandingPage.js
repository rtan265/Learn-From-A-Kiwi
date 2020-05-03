import React from 'react';
import { Container, Jumbotron, Button, Row, Col, UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom';

import './LandingPage.css';

import Footer from '../footer/Footer';

import Janine from '../../images/janine.jpg';
import Taryn from '../../images/taryn.jpg';
import MariaDeclan from '../../images/mariaDeclan.jpg';
import CassieBen from '../../images/cassieBen.jpg';
import Esther from '../../images/esther.jpg';

// Jumbotron carousel images
import JumbotronImg from '../../images/jumbotron.jpg';
import JumbotronImg2 from '../../images/landingPageMomJumbo.png';
import JumbotronImg3 from '../../images/landingPageYoga.png';

const items = [
    {
        src: JumbotronImg,
        alText: 'Slide 1',
        caption: '',
        header: '',
        key: '1'
    },
    {
        src: JumbotronImg2,
        altText: 'Slide 2',
        caption: '',
        header: '',
        key: '2'
    },
    {
        src: JumbotronImg3,
        altText: 'Slide 3',
        caption: '',
        header: '',
        keys: '3',
    }
]

class LandingPage extends React.Component {
  constructor(props){
      super(props);
      this.state = ({
          activeIndex: 0,
          setActiveIndex: 0,
          animating: false,
          setAnimating: false
      })
  }

  render() {
    return (
        <div style={{backgroundColor: "#eff0f2"}}>
            <UncontrolledCarousel items = { items } className = "carousel-image-style"/>
                <Container fluid className="vertical-center">
                    <h1 className="display-3">Locals. Learning. Live</h1>
                    <p className="lead">
                        <Button color="dark"><Link className = "explore-button" to="/exploretimetable">EXPLORE TIMETABLES</Link></Button>
                    </p>
                </Container>
            <Container fluid className="containerBg">
                <Row> 
                    <h2 className="title">Find an Instructor</h2>
                </Row>
                <Row>
                    <p className="sub">Can't get to your usual class? Whether it's to excite or educate, there's something for everyone!</p>
                </Row>
                <Row>
                    <Col>
                        <Link className="linkHover" to="/instructorAdditionalInfo">
                            <figure className="class">                           
                                <img src={ Janine } alt="Janine" className="classImg" />
                                <figcaption>Janine</figcaption>
                            </figure>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/instructors">
                            <figure className="class">                            
                                <img src={ Taryn } alt="Taryn" className="classImg" />
                                <figcaption>Taryn</figcaption>
                            </figure>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/instructors">
                            <figure className="class">
                                <img src={ MariaDeclan } alt="Maria \& Declan" className="classImg" />
                                <figcaption>Maria &#38; Declan</figcaption>
                            </figure>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/instructors">
                            <figure className="class">
                                <img src={ CassieBen } alt= "Cassie \& Ben" className="classImg" />
                                <figcaption>Cassie &#38; Ben</figcaption>
                            </figure>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/instructors">
                            <figure className="class">
                                <img src={ Esther } alt="Esther" className="classImg" />
                                <figcaption>Esther</figcaption>
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
                            <div className="subject" style={{backgroundColor: "#e49b53"}}><h3 className="subText">Art</h3></div>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#8cb85f"}}><h3 className="subText">Eco-living</h3></div>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#d6a4e4"}}><h3 className="subText">Yoga</h3></div>
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#ff5757"}}><h3 className="subText">Language</h3></div>   
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#ffde59"}}><h3 className="subText">Cooking</h3></div>    
                        </Link>
                    </Col>
                    <Col>
                        <Link className="linkHover" to="/inprogress">
                            <div className="subject" style={{backgroundColor: "#4790f1"}}><h3 className="subText">Wellness</h3></div>    
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="containerBg" style={{marginBottom: "0em"}}>
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