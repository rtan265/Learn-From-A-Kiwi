import React from 'react';
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';

import JumbotronImg from '../../images/instructorJumbotron.jpg';

import Cards from '../cards/Cards';
import SubjectBar from '../subjectBar/SubjectBar'
class InstructorGrid extends React.Component {
    
  render() {
    return (
        <div>
            <Jumbotron style={{ backgroundImage: `url(${JumbotronImg})`, backgroundSize: 'cover' }} fluid />
            <Row style={{paddingTop: "2em"}}>
                <Col xs="2"><SubjectBar /></Col>
                <Col><Cards /></Col>
            </Row>
        </div>
    );
  }
}

export default InstructorGrid;