import React from "react";
import "../Components/More.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Records from "../records.json";
import { Container, Row, Col } from "react-bootstrap";
export const About = () => {
  return (
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
              <a href="/About">More Cartoons</a>{" "}
            </li>

            {/* <li>
              {" "}
              <a href="/Careers">Careers</a>{" "}
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="aboutdiv">
        <Container>
          <Row className="d-flex justify-content-evenly">
            {Records &&
              Records.map((record) => {
                return (
                  <Col className="about-column" sm="4" md="3" lg="3">
                    <Card
                      className="CardCartoon"
                      sx={{ maxWidth: 230, Height: 650 }}
                    >
                      <CardMedia
                        className="Cardmediacss"
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={record.Image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {record.caption}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Rem, blanditiis.
                        </Typography>
                      </CardContent>
                      <CardActions className="Cardaction">
                        <Button className="Cardaction" size="small">
                          Share
                        </Button>
                        <Button className="Cardaction" size="small">
                          Watch
                        </Button>
                      </CardActions>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
};
