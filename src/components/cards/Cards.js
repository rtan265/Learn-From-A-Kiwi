import React from 'react';
import { Container, Button, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import { Link } from 'react-router-dom';


import './Cards.css';

const cards = [
    { src: require('../../images/janine.jpg'), cat: "Cooking", title: "Janine" },
    { src: require('../../images/taryn.jpg'), cat: "Yoga", title: "Taryn"},
    { src: require('../../images/selena.jpg'), cat: "Yoga", title: "Selena"},
    { src: require('../../images/nick.jpg'), cat: "Art", title: "Nick"},
    { src: require('../../images/cassieBen.jpg'), cat: "Cooking", title: "Cassie & Ben"},
    { src: require('../../images/esther.jpg'), cat: "Wellness", title: "Esther"},
    { src: require('../../images/selena.jpg'), cat: "Yoga", title: "Megan"},
    { src: require('../../images/max.jpg'), cat: "Language", title: "Max"},
    { src: require('../../images/li.jpg'), cat: "Cooking", title: "Li"},
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
                                                <Link to={ "/instructorAdditionalInfo" } className="cardLink">Explore classes</Link>
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