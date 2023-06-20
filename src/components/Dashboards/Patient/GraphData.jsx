import React from 'react'
import ChartistGraph from "react-chartist";
import {
  Card,
  Row,
  Col
} from "react-bootstrap";

const GraphData = () => {
    return(
        <>
            <Row className='banner_part_dashboard'>

                <Col md="8" className='graph-map'>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">Patient Steps Data</Card.Title>
                                <p className="card-category">Weeks Activity</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="ct-chart" id="chartActivity">
                            <ChartistGraph
                                data={{
                                labels: [
                                    "Sun",
                                    "Mon",
                                    "Tue",
                                    "Wed",
                                    "Thu",
                                    "Fri",
                                    "Sat",
                                ],
                                series: [
                                    [
                                    542,
                                    443,
                                    320,
                                    780,
                                    553,
                                    453,
                                    326,
                                    ],
                                    [
                                    412,
                                    243,
                                    280,
                                    580,
                                    453,
                                    353,
                                    300,
                                    ],
                                ],
                                }}
                                type="Bar"
                                options={{
                                seriesBarDistance: 10,
                                axisX: {
                                    showGrid: false,
                                },
                                height: "245px",
                                }}
                                responsiveOptions={[
                                [
                                    "screen and (max-width: 640px)",
                                    {
                                    seriesBarDistance: 5,
                                    axisX: {
                                        labelInterpolationFnc: function (value) {
                                        return value[0];
                                        },
                                    },
                                    },
                                ],
                                ]}
                            />
                            </div>
                        </Card.Body>
                    </Card>
                </Col> 
                <Col md="4" className='graph-map'>
                    <Card>
                    <Card.Header>
                        <Card.Title as="h4">Anything</Card.Title>
                        <p className="card-category">Performance</p>
                    </Card.Header>
                    <Card.Body>
                        <div
                        className="ct-chart ct-perfect-fourth"
                        id="chartPreferences"
                        >
                        <ChartistGraph
                            data={{
                            labels: ["40%", "20%", "40%"],
                            series: [40, 20, 40],
                            }}
                            type="Pie"
                        />
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='banner_part_dashboard'>
                <Col md="12" className='graph-map'>
                    <Card>
                    <Card.Header>
                        <Card.Title as="h4">Patient Heart Behavior</Card.Title>
                        <p className="card-category">24 Hours performance</p>
                    </Card.Header>
                    <Card.Body>
                        <div className="ct-chart" id="chartHours">
                        <ChartistGraph
                            data={{
                            labels: [
                                "9AM",
                                "12AM",
                                "3PM",
                                "6PM",
                                "9PM",
                                "12PM",
                                "3AM",
                                "6AM",
                            ],
                            series: [
                                [287, 385, 490, 492, 554, 586, 698, 695],
                                [67, 152, 143, 240, 287, 335, 435, 437],
                                [23, 113, 67, 108, 190, 239, 307, 308],
                            ],
                            }}
                            type="Line"
                            options={{
                            low: 0,
                            high: 800,
                            showArea: false,
                            height: "245px",
                            axisX: {
                                showGrid: false,
                            },
                            lineSmooth: true,
                            showLine: true,
                            showPoint: true,
                            fullWidth: true,
                            chartPadding: {
                                right: 50,
                            },
                            }}
                            responsiveOptions={[
                            [
                                "screen and (max-width: 640px)",
                                {
                                axisX: {
                                    labelInterpolationFnc: function (value) {
                                    return value[0];
                                    },
                                },
                                },
                            ],
                            ]}
                        />
                        </div>
                    </Card.Body>
                    </Card>
                </Col>           
            </Row>
        </>
    )
}

export default GraphData;