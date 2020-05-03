import React from 'react';
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import JumbotronImg from '../../images/exploreTimetableJumbotron.png';
import Janine from '../../images/janine.jpg';
import Taryn from '../../images/taryn.jpg';
import MariaDeclan from '../../images/mariaDeclan.jpg';
import CassieBen from '../../images/cassieBen.jpg';
import Esther from '../../images/esther.jpg';
import Selena from '../../images/selena.jpg';
import Max from '../../images/max.jpg';
import Li from '../../images/li.jpg';
import Nick from '../../images/nick.jpg';


import './ExploreTimetable.css';

import Footer from '../footer/Footer';

class ExploreTimetable extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron style={{ backgroundImage: `url(${JumbotronImg})`, backgroundSize: 'cover', height: "28em" }} fluid>
          <h1 className="display-3 jumbotext">Explore Timetable</h1>
        </Jumbotron>

        <div className="timetableBox">
          <h1 style={{paddingTop: "0.5em"}} ><span style={{paddingRight: "4em", color: "#0162e4"}}>Timetable - all </span> Join Friends</h1>
        
          <Row style={{paddingTop: "2em"}}>
            <Col className="padCols">
              <span style={{color: "#0162e4"}}>SUN</span> <br />
              <span className="activeDot">3</span>
              <div className="timetableBar">
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ffbd59"}}><img src={ Janine } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#dd8bbd"}}><img src={ Taryn } className="circleImg"/></div></div>
                <br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#03989e"}}><img src={ Nick } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#004aad"}}><img src={ MariaDeclan } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#8c52ff"}}><img src={ Esther } className="circleImg"/></div></div>
                <br /><br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#697635"}}><img src={ Selena } className="circleImg"/></div></div>
              </div>
            </Col>
            <Col className="padCols">
              MON <br />
              <span className="dot">4</span>
                <div className="timetableBar">
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#008037"}}><img src={ CassieBen } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#c3726a"}}><img src={ Li } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ffbd59"}}><img src={ Janine } className="circleImg"/></div></div>
                <br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ac97d6"}}><img src={ Max } className="circleImg"/></div></div>
                <br /><br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#c3726a"}}><img src={ Li } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#008037"}}><img src={ CassieBen } className="circleImg"/></div></div>
              </div>
            </Col>
            <Col className="padCols">
              TUES <br />
              <span className="dot">5</span>
              <div className="timetableBar">
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#03989e"}}><img src={ Nick } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#c3726a"}}><img src={ Li } className="circleImg"/></div></div>
                <br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ac97d6"}}><img src={ Max } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#03989e"}}><img src={ Nick } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#697635"}}><img src={ Selena } className="circleImg"/></div></div>
                <br /><br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ac97d6"}}><img src={ Max } className="circleImg"/></div></div>
              </div>
            </Col>
            <Col className="padCols">
              WED <br />
              <span className="dot">6</span>
              <div className="timetableBar">
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#03989e"}}><img src={ Nick } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#697635"}}><img src={ Selena } className="circleImg"/></div></div>
                <br /><br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ffbd59"}}><img src={ Janine } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#004aad"}}><img src={ MariaDeclan } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#c3726a"}}><img src={ Li } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#008037"}}><img src={ CassieBen } className="circleImg"/></div></div>
              </div>
            </Col>
            <Col className="padCols">
              THUR <br />
              <span className="dot">7</span>
              <div className="timetableBar">
              <div className="pad"><div className="rectangle" style={{backgroundColor: "#008037"}}><img src={ CassieBen } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#c3726a"}}><img src={ Li } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ffbd59"}}><img src={ Janine } className="circleImg"/></div></div>
                <br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#004aad"}}><img src={ MariaDeclan } className="circleImg"/></div></div>
                <br /><br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#008037"}}><img src={ CassieBen } className="circleImg"/></div></div>
              </div>
            </Col>
            <Col className="padCols">
              FRI <br />
              <span className="dot">8</span>
              <div className="timetableBar">
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#c3726a"}}><img src={ Li } className="circleImg"/></div></div>
                <br />
                
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#004aad"}}><img src={ MariaDeclan } className="circleImg"/></div></div>
                <br /><br /><br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#c3726a"}}><img src={ Li } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#697635"}}><img src={ Selena } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ffbd59"}}><img src={ Janine } className="circleImg"/></div></div>
              </div>
            </Col>
            <Col className="padCols">
              SAT <br />
              <span className="dot">9</span>
                <div className="timetableBar">
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ac97d6"}}><img src={ Max } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#c3726a"}}><img src={ Li } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ffbd59"}}><img src={ Janine } className="circleImg"/></div></div>
                <br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#004aad"}}><img src={ MariaDeclan } className="circleImg"/></div></div>
                <br /><br />
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#697635"}}><img src={ Selena } className="circleImg"/></div></div>
                <div className="pad"><div className="rectangle" style={{backgroundColor: "#ac97d6"}}><img src={ Max } className="circleImg"/></div></div>
              </div>
            </Col>
          </Row>
        </div>
      <Footer />
      </div>

    );
  }
}

export default ExploreTimetable;