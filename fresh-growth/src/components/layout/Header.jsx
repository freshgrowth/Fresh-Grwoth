import React, { useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Contains hover styles and custom spacing

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const navItemStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
    color: "#304050",
  };

  const navItemLargeStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: 500,
    color: "#304050",
  };

  return (
    <header>
      <Navbar
        bg="white"
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        className="py-3 shadow-sm"
      >
        <Container fluid className="d-flex align-items-center">
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center me-3 brand-title"
          >
            <span
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: 700,
              }}
            >
              <span style={{ color: "#1c3d8e" }}>FRESH</span>
              <span style={{ color: "#f0642c" }}>GROWTH</span>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Mobile Nav */}
            <Nav className="text-center d-lg-none w-100">
              <Nav.Link href="#home" style={navItemStyle} className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#features" style={navItemStyle} className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="#blog" style={navItemStyle} className="nav-link-custom">
                Blog
              </Nav.Link>
              <Nav.Link href="#contact" style={navItemStyle} className="nav-link-custom">
                Contact
              </Nav.Link>
              <NavDropdown
                title={<span className="nav-link-custom" style={navItemStyle}>Services</span>}
                id="basic-nav-dropdown-mobile"
              >
                <NavDropdown.Item href="#seo">SEO</NavDropdown.Item>
                <NavDropdown.Item href="#ads">Google Ads</NavDropdown.Item>
                <NavDropdown.Item href="#smm">Social Media Marketing</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Desktop Nav */}
            <Nav className="d-none d-lg-flex align-items-center gap-4 mx-auto">
              <Nav.Link href="#home" style={navItemLargeStyle} className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#features" style={navItemLargeStyle} className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="#blog" style={navItemLargeStyle} className="nav-link-custom">
                Blog
              </Nav.Link>
              <Nav.Link href="#contact" style={navItemLargeStyle} className="nav-link-custom">
                Contact
              </Nav.Link>
              <NavDropdown
                title={<span className="nav-link-custom" style={navItemLargeStyle}>Services</span>}
                id="basic-nav-dropdown-lg"
                align="end"
              >
                <NavDropdown.Item href="#seo">SEO</NavDropdown.Item>
                <NavDropdown.Item href="#ads">Google Ads</NavDropdown.Item>
                <NavDropdown.Item href="#smm">Social Media Marketing</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Get Started Buttons */}
            <div className="ms-auto d-none d-lg-block">
              <Button
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  backgroundColor: "#FF7E5F",
                  width: "108px",
                  height: "32px",
                  borderRadius: "6px",
                  border: "none",
                }}
                className="get-started-btn"
              >
                Get Started
              </Button>
            </div>

            <div className="text-center mt-3 d-lg-none">
              <Button
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  backgroundColor: "#FF7E5F",
                  width: "108px",
                  height: "32px",
                  borderRadius: "6px",
                  border: "none",
                }}
                className="get-started-btn"
              >
                Get Started
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
