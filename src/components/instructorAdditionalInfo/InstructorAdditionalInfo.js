import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import './InstructorAdditionalInfo.css';
import TabsForAdditional from '../tabsForAdditional/TabsForAdditional';
import Footer from '../footer/Footer';
import Janine from '../../images/janine.jpg';

class InstructorAdditionalInfo extends React.Component{ 
    render() {
        return (
            <div>
                <Jumbotron fluid style={{padding: "0em 0em 0em 0em"}}>
                <Row fluid>
                    <Col xs="5">
                        <img src={Janine} style={{height: "22em", width: "auto", padding:"0em 0em 0em 0em"}} />
                    </Col>
                    <Col>
                        <div className ="text-body">
                            <p className ="text-title">Janine Homemade</p>
                            <p className="display">Cupcakes are muffins that believed in miracles!</p>
                            <p className="display">Blenheim local, Janine, brings delicious and wholesome food that looks amazing straight into your kitchen.</p>
                            <p className="display">Janine is a Registered Nurse with a passion for nourishing the body and eating for immunity.</p>
                        </div>
                    </Col>
                </Row>
                </Jumbotron>
                <div className = "bottom">
                    <TabsForAdditional></TabsForAdditional>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default InstructorAdditionalInfo;