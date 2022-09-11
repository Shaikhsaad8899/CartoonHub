import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Components/Landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tom from "../assets/TAJ.png";
import Oggy from "../assets/oggy.png";
import Doraemon from "../assets/doraemon.png";
import Scooby from "../assets/scooby.png";
import Billi from "../assets/billi.png";
import { FaBars, FaTimes } from "react-icons/fa";
export const Landing = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <React.Fragment>
      <body className="body min-h-screen">
        <div className="Landingdiv">
          <div className="header">
            <div className="logo">
              <h1>Cartoon City</h1>
            </div>
            <nav className="Navbar" ref={navRef}>
              <a href="/Landing">Home</a>
              <a href="/About">
                More Cartoons
              </a> <a href="/Careers">Careers</a>{" "}
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>
            </nav>
          </div>

          <div id="carouseldiv">
            <Container id="containerid">
              <Row>
                <Col className="carouseldiv" md="12">
                  <div
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          class="carImg d-block w-10"
                          src={Tom}
                          alt="First slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="carImg d-block "
                          src={Doraemon}
                          alt="First slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="carImg d-block "
                          src={Scooby}
                          alt="First slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="carImg d-block "
                          src={Oggy}
                          alt="First slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="carImg d-block "
                          src={Billi}
                          alt="First slide"
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </Col>
              </Row>
              <Row className="Row-one d-flex justify-content-evenly ">
                <Col id="Content-col-one" md="6">
                  <Row>
                    <h4>Metro Doraemon Mayer</h4>
                  </Row>
                  <Row>
                    <h5>TOM AND JERRY</h5>
                  </Row>
                  <Row>
                    <h5>
                      Tom and Jerry is an American animated media franchise and
                      series of comedy short films created in 1940 by William
                      Hanna and Joseph Barbera.{" "}
                    </h5>
                  </Row>
                  <Row>
                    <button id="startwbtn">
                      {" "}
                      <a href="https://youtu.be/oiHulAQmdqI">Start Watching</a>
                    </button>
                  </Row>
                </Col>
                <Col className="imgTom" md="3">
                  <img src={Tom} alt="" />
                </Col>
              </Row>

              <Row className="Row-two d-flex justify-content-evenly">
                <Col className="imgTom" md="3">
                  <img src={Billi} alt="" />
                </Col>
                <Col id="Content-col-two" md="6">
                  <Row>
                    <h4>Maxwell Atoms </h4>
                  </Row>
                  <Row>
                    <h5>Billi And Mandy</h5>
                  </Row>
                  <Row>
                    <h5>
                      The ill-tempered Grim Reaper gets into a wager that forces
                      him to become the life-long companions of two scheming
                      youngsters after he loses.{" "}
                    </h5>
                  </Row>
                  <Row>
                    <button id="startwbtn">
                      {" "}
                      <a href="https://youtu.be/oiHulAQmdqI">Start Watching</a>
                    </button>
                  </Row>
                </Col>
              </Row>
              <Row className="Row-three d-flex justify-content-evenly">
                <Col id="Content-col-three" md="6">
                  <Row>
                    <h4> Joe Ruby and Ken Spears</h4>
                  </Row>
                  <Row>
                    <h5>Scooby-Doo</h5>
                  </Row>
                  <Row>
                    <h5>
                      Scooby-Doo is the eponymous character and protagonist of
                      the animated television franchise of the same name,
                      created in 1969 by the American animation{" "}
                    </h5>
                  </Row>
                  <Row>
                    <button id="startwbtn">
                      {" "}
                      <a href="https://youtu.be/oiHulAQmdqI">Start Watching</a>
                    </button>
                  </Row>
                </Col>
                <Col className="imgTom" md="3">
                  <img src={Scooby} alt="" />
                </Col>
              </Row>
              <Row className="Row-four d-flex justify-content-evenly">
                <Col className="imgTom" md="5">
                  <img src={Oggy} alt="" />
                </Col>
                <Col id="Content-col-four" md="5">
                  <Row>
                    <br /> <h4>Olivier Jean-Marie</h4>
                  </Row>
                  <Row>
                    <h5>Oggy and the Cockroaches</h5>
                  </Row>
                  <Row>
                    <h5>
                      All Oggy, the blue cat, wants to do is watch television
                      and relax. However, Joey, Dee Dee and Marky, the
                      cockroaches in his house, seldom allow him to do so.
                    </h5>
                  </Row>
                  <Row>
                    <button id="startwbtn">
                      <a href="https://g.co/kgs/No8fzF"> Start Watching</a>
                    </button>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
};
