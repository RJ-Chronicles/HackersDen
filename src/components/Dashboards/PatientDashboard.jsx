import React from 'react'
import {
  Container,
} from "react-bootstrap";
import DailyData from './Patient/DailyData';
import GraphData from './Patient/GraphData';

const PatientDashboard = () => {
  return (
    <div className='content'>
      <Container fluid>
          <DailyData />
          <GraphData />
      </Container>
    </div>
  )
}

export default PatientDashboard;