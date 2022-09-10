import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Components/Landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Diamond from "../assets/TAJ.png";
import Silver from "../assets/oggy.png";
import Golden from "../assets/doraemon.png";
export const Landing = () => {
  return (
    <React.Fragment>
      <div className="Landingdiv">
        <div className="header">
          <div className="logo">
            <h1>Cartoon City</h1>
          </div>
          <nav className="Navbar">
            <ul>
              <li>
                {" "}
                <a href="/Landing">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/About">About Us</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/Careers">Careers</a>{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Container id="containerid">
            <br />
            <Row>
              <Col md="1"></Col>
              <Col id="Content-col" md="5">
                <Row>
                  <h4>Metro Golden Mayer</h4>
                </Row>
                <Row>
                  <h5>TOM AND JERRY</h5>
                </Row>
                <Row>
                  <h5>
                    Tom and Jerry is an American animated media franchise and
                    series of comedy short films created in 1940 by William
                    Hanna and Joseph Barbera. Best known for its 161 theatrical
                    short films by Metro-Goldwyn-Mayer, the series centers on
                    the rivalry between the titular characters of a cat named
                    Tom and a mouse named Jerry.{" "}
                  </h5>
                </Row>
                <Row>
                  <button>
                    {" "}
                    <a href="https://youtu.be/oiHulAQmdqI">Start Watching</a>
                  </button>
                </Row>
              </Col>
              <Col className="imgTom" md="5">
                <img src={Diamond} alt="" />
              </Col>
              <Col md="1"></Col>
            </Row>
            <Row >
              <Col className="carouseldiv" md="12">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-50" src={Diamond} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src={Silver} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src={Golden} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                
                </Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col className="imgTom" md="5">
                <img src={Silver} alt="" />
              </Col>
              <Col id="Content-col" md="5">
                <Row>
                  <br /> <h4>Olivier Jean-Marie</h4>
                </Row>
                <Row>
                  <h5>Oggy and the Cockroaches</h5>
                </Row>
                <Row>
                  <h5>
                    All Oggy, the blue cat, wants to do is watch television and
                    relax. However, Joey, Dee Dee and Marky, the cockroaches in
                    his house, seldom allow him to do so.
                  </h5>
                </Row>
                <Row>
                  <button>
                    <a href="https://g.co/kgs/No8fzF"> Start Watching</a>
                  </button>
                </Row>
              </Col>

              <Col md="1"></Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};
