import React, { useState } from "react";
import "./Dashboard.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";

function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      newDarkMode ? "dark" : "light"
    );
  };

  return (
    <div className="dashboard">
      <Navbar onToggleTheme={handleToggleTheme} />

      <Container fluid className="dashboard-container p-4">
        <Row className="mb-4">
          <Col md={4}>
            <Card className="text-center card-custom">
              <Card.Body>
                <Card.Title>Total Campaigns</Card.Title>
                <Card.Text>
                  <strong>88</strong> Active Segments
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center card-custom">
              <Card.Body>
                <Card.Title>Delivery Success</Card.Title>
                <Card.Text>
                  <strong>92%</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center card-custom">
              <Card.Body>
                <Card.Title>Audience Size</Card.Title>
                <Card.Text>
                  <strong>1280</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="primary" className="float-end">
              + New Campaign
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
