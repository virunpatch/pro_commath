import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "5%" }}>
       <u> Computational Mathematics</u>
      </h1>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>

        <Col sm="6">
          <div className="text-center">
            <Row>
              <Col sm="6">
                <Card style={{backgroundColor: "#86AC41"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px"}}><u>บทที่ 1</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Basic Computing</h4>
                  </CardText>
                 
                    <Button onClick={()=>{nextPage("b2s")}} color="warning">
                      <h3 style={{ marginTop: "10px" }}>ทดสอบ</h3>
                    </Button>
                  
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "#9A9EAB"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 2</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Linear Equations</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("elimination")}} color="success">
                    <h3 style={{ marginTop: "10px" }}>ทดสอบ</h3>
                  </Button>
                </Card>
              </Col>
            </Row>

            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{backgroundColor: "#F1F3CE"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 3</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Interpolation</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("interpolation")}} color="danger">
                    <h3 style={{ marginTop: "10px" }}>ทดสอบ</h3>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "#FE7A47"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 4</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Differentiation</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("differentiation")}} color="dark">
                    <h3 style={{ marginTop: "10px" }}>ทดสอบ</h3>
                  </Button>
                </Card>
              </Col>
            </Row>


            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{backgroundColor: "#426E86"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 5</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Integration</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("integration")}} color="primary">
                    <h3 style={{ marginTop: "10px" }}>ทดสอบ</h3>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "#D6C6B9"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 6</u></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Root-finding</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("root-finding")}} color="info">
                    <h3 style={{ marginTop: "10px" }}>ทดสอบ</h3>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </div>
  );
}

export default Main;
