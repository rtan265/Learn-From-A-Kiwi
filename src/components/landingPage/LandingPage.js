import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';


class LandingPage extends React.Component {
  render() {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-3">Locals. Learning. Live</h1>
            
            </Container>
      </Jumbotron>
    );
  }
}

export default LandingPage;