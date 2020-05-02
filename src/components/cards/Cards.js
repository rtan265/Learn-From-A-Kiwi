import React from 'react';
import { Container, Button, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import { Link } from 'react-router-dom';


import './Cards.css';

const cards = [
    { src: require('../../images/janineHomemade.jpg'), cat: "Cooking", title: "Janine Homemade" },
    { src: require('../../images/yogaByTaryn.jpg'), cat: "Yoga", title: "Yoga By Taryn"},
    { src: require('../../images/yogaByTaryn.jpg'), cat: "Yoga", title: "Selena Yoga"},
    { src: require('../../images/culinaryChris.jpg'), cat: "Art", title: "Nick"},
    { src: require('../../images/janineHomemade.jpg'), cat: "Cooking", title: "Cassie & Ben"},
    { src: require('../../images/janineHomemade.jpg'), cat: "Wellness", title: "Esther"},
    { src: require('../../images/yogaByTaryn.jpg'), cat: "Yoga", title: "Yoga by Megan"},
    { src: require('../../images/poetry.jpg'), cat: "Language", title: "Max"},
    { src: require('../../images/culinaryChris.jpg'), cat: "Cooking", title: "Culinary Chris"},
];

class Cards extends React.Component {
  render() {
    return (
        <div>
            <Container fluid>
                <Row>
                    {
                        cards./*filter(cards => cards.cat === this.props.category).*/map((key, src, cat, title) => {
                            return (
                                <Col style={{padding: "1em 1em 1em 1em"}}>
                                    <Card>
                                        <CardImg top width="100%" style={{height: "12em", width: "auto", objectFit: "cover"}} src={key.src} alt={key.cardText} />
                                        <CardBody>
                                            <CardTitle style={{textAlign: "left"}}>{ key.cat }</CardTitle>
                                            <CardSubtitle style={{textAlign: "left"}}>{ key.title }</CardSubtitle>
                                            <CardText style={{textAlign: "left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula turpis at finibus rutrum. </CardText>
                                            <Button style={{backgroundColor: "#0162e4"}}>
                                                <Link to={ "/instructorAdditionalInfo" } className="link">Explore classes</Link>
                                            </Button>
                                        </CardBody>
                                    </Card>  
                                </Col>  
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
  }
}

export default Cards;