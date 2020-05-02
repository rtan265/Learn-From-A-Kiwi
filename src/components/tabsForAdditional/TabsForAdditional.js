import React, {useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import './TabsForAdditional.css';


const TabsForAdditional = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
          <Nav tabs className = "tab-grid">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                className="tab"
                onClick={() => { toggle('1'); }}
              >
                Classes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                className="tab"
                onClick={() => { toggle('2'); }}
              >
                Timetables
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                className="tab"
                onClick={() => { toggle('3'); }}
              >
                Pricing 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                className="tab"
                onClick={() => { toggle('4'); }}
              >
                Reviews
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
            <Container>
              <Row fluid className="eventBox"> 
                <Col>
                    <div className = "events">
                        <h3 className = "event-title">Date night platter</h3>
                        <p>Duration: 40 minutes</p>
                        <p>Equipment: Platter board, shopping list advised via email</p>
                        <p>Who it's for: Foodie couples looking for a fun night in</p>
                    </div>
                </Col>
                <Col>
                    <Button style = {{backgroundColor: "#555555", marginTop: "8em"}}>Book Now</Button>
                </Col>
              </Row>

              <Row fluid className="eventBox">
                  <Col>
                    <div className = "events">
                        <h3 className = "event-title">Platter design</h3>
                        <p>Duration: 60 minutes</p>
                        <p>Equipment: Platter board, shopping list advised via email</p>
                        <p>Who it's for: Anyone interested in learning about how to create the perfect platter visually and full of flavour</p>
                    </div>
                   </Col>
                   <Col>
                    <Button style = {{backgroundColor: "#555555", marginTop: "8em"}}>Book Now</Button>
                   </Col>
              </Row>

              <Row fluid className="eventBox">
                  <Col>
                    <div className = "events" style={{paddingBottom: "2em"}}>
                        <h3 className = "event-title">Creative Wholefood for Kids</h3>
                        <p>Duration: 60 minutes</p>
                        <p>Equipment: Shopping list advised via email</p>
                        <p>Who it's for: Foodie mums and dads looking to sneak some healthy delicious food into their kids lives that everyone can enjoy!</p>
                    </div>
                </Col>
                <Col>
                    <Button style = {{backgroundColor: "#555555", marginTop: "8em"}}>Book Now</Button>
                </Col>
              </Row>
            </Container>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col style={{minHeight: "10em"}}>
                  <h4>Tab 2 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col style={{minHeight: "10em"}}>
                  <h4>Tab 3 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col style={{minHeight: "10em"}}>
                  <h4>Tab 4 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
    );
}

export default TabsForAdditional;