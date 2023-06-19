import React from 'react'
import {
    Card,
    Row,
    Col
  } from "react-bootstrap";


const DailyData = () => {
  return (
    <Row className='banner_part_dashboard'>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <img src='https://corporatefitnessworks.com/wp-content/uploads/2020/06/Movement-element-300x300-1-300x300.png' />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Steps</p>
                      <Card.Title as="h4">1022</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <img src='https://image.freepik.com/free-vector/calories-concept-2-colored-icon-simple-blue-element-illustration-calories-concept-symbol-design-can-be-used-web-mobile-ui-ux_159242-6657.jpg' />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Calory</p>
                      <Card.Title as="h4">345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <img src='https://thumbs.dreamstime.com/b/oxygen-vector-icon-water-drop-184217788.jpg' />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Oxygen Level</p>
                      <Card.Title as="h4">98%</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <img src='https://thumbs.dreamstime.com/b/palpitation-icon-long-shadow-element-sport-mobile-concept-web-apps-isolated-can-be-used-white-background-fo-122261645.jpg' />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Heart Rate</p>
                      <Card.Title as="h4">85+</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  )
}

export default DailyData;