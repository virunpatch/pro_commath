import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getIntegration } from "../functions/function";

function Integration() {
  const navigate = useNavigate();

  const [result, setresult] = useState();
  const [a, seta] = useState(0);
  const [b, setb] = useState(3);

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      a: a,
      b: b,
    };
    getIntegration(data).then((res) => {
      setresult(res);
    });
  };
  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="text-center">
            <h2 style={{ marginTop: "20px" }}><u>
              บทที่5 Integration
              </u>
            </h2>
            <h4>

            </h4>
          </div>
           <Card style={{ marginTop: "20px", marginRight: "0px",margin: "10",backgroundColor: "" }}>
        <div style={{ marginTop: "0px", marginRight: "0px",margin: "10" }}>
           <h5 style={{ marginTop: "20px", marginRight: "110px",margin: "50px"}} >exam:</h5>
           <h6 style={{ marginRight: "110px",margin: "50px"}}>คำนวณหาพื้นที่ใต้กราฟ f(x) จากในช่วง x∈[a,b] โดยปกติแล้วจะใช้วิธีประมาณค่าโดยการแบ่งพื้นที่ออกเป็นช่วงๆ แต่ละช่วงจะเป็นสี่เหลี่ยมแล้วรวมพื้นที่สี่เหลี่ยมเหล่านั้นมาประมาณค่าพื้นที่ใต้กราฟ</h6>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>เมื่อให้ f(x) = 3*x**2 + 9*x + 2 , n = 4</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>หาพื้นที่ใต้กราฟโดยใช้ Simpson's rule </h5>
           <p style={{ marginRight: "110px",margin: "50px"}}>สูตร (f(x0+0*h) + 4*f(x0+1*h) + 2*f(x0+2*h) + 4*f(x0+3*h) + f(x0+4*h))*h/3 เมื่อ n=4 , x0 = a ,h = (b-a)/n</p>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>กำหนด  a = 0 และ b = 3</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>เมื่อแทนในสูตร ผลลัพธ์ที่ได้คือ 73.5</h5>
        </div>
       </Card>
         

          <Card style={{marginTop: "10px", alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>a:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a}
                    onChange={(e) => seta(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>b:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={b}
                    onChange={(e) => setb(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>
            <h4 style={{ marginBottom: "10px" }}>Result: {result}</h4>

            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="success">
                  <div style={{ width: 300 }}>
                    <h3 style={{ marginTop: "10px" }}>คำนวณ</h3>
                  </div>
                </Button>
              </Col>
              <Col sm="4">
                <Button onClick={back} color="primary">
                  <div style={{ width: 100 }}>
                    <h3 style={{ marginTop: "10px" }}>กลับ</h3>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="4"></Col>
      </Row>
    </div>
  );
}
export default Integration