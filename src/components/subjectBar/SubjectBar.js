import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './SubjectBar.css';
import Cards from '../cards/Cards';
import InstructorGrid from '../instructorGrid/InstructorGrid';

class SubjectBar extends React.Component {
  render() {
    return (
      <div style={{paddingLeft: "3em"}}>
        <h1>Subjects</h1>
        <Nav vertical>
            <NavLink href="#" className="active">All subjects</NavLink>
            <NavLink href="#" onClick={()=><InstructorGrid category="Art"/>}>Art</NavLink>
            <NavLink href="#" onClick={()=><InstructorGrid category="Cooking"/>}>Cooking</NavLink>
            <NavLink href="#" onClick={()=><InstructorGrid category="Yoga"/>}>Yoga</NavLink>
            <NavLink href="#" onClick={()=><InstructorGrid category="Wellness"/>}>Wellness</NavLink>
            <NavLink href="#" onClick={()=><InstructorGrid category="Language"/>}>Language</NavLink>
            <NavLink href="#" onClick={()=><InstructorGrid category="Eco-Living"/>}>Eco Living</NavLink>
        </Nav>
      </div>
    )};
}

export default SubjectBar;