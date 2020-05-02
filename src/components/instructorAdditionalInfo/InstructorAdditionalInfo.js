import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './InstructorAdditionalInfo.css';
import TabsForAdditional from '../tabsForAdditional/TabsForAdditional';
import Footer from '../footer/Footer';
import janineHomemade from '../../images/janineHomemade.jpg';

class InstructorAdditionalInfo extends React.Component{ 
    render() {
        return (
            <div>
                <Jumbotron fluid>
                <div className = "split left">
                </div>

                <div className = "split right">
                    <div className = "text-body">
                        <p className = "text-title">Janine Homemade</p>
                        <p className="display">Cupcakes are muffins that believed in miracles!</p>
                        <p className="display">Blenheim local, Janine, brings delicious and wholesome food that looks amazing straight into your kitchen.</p>
                        <p className="display">Janine is a Registered Nurse with a passion for nourishing the body and eating for immunity.</p>
                    </div>
                </div>
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