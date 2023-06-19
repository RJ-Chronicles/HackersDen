import React from 'react'
import {
  Container,
} from "react-bootstrap";
import DailyData from './Patient/DailyData';
import GraphData from './Patient/GraphData';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const PatientDashboard = () => {
  return (
    <div className='content'>
      <Container fluid>
          <Header />
          <DailyData />
          <GraphData />
          <Footer />
      </Container>
    </div>
  )
}

export default PatientDashboard;