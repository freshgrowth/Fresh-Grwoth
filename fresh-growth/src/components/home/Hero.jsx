import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <Card className="hero-card text-center shadow-lg">
              <Card.Body>
                <h1 className="hero-heading">
                  Grow Your Business with <br className="d-none d-md-block" />
                  Data-Driven Digital Marketing
                </h1>
                <p className="hero-subheading">
                  We help businesses achieve sustainable growth through expert SEO,
                  Google Ads, and Social Media Marketing services.
                </p>
                <div className="hero-buttons d-flex justify-content-center flex-wrap gap-3">
                  <Button className="hero-btn primary-btn">Get Started</Button>
                  <Button className="hero-btn secondary-btn">Our Services</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
