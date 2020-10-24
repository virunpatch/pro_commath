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
import { getDifferentiation } from "../functions/function";

function Differentiation() {
  const navigate = useNavigate();
  const [h, seth] = useState(0.64);
  const [p, setp] = useState(2);

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      h:h,
      p:p
      
    };
    getDifferentiation(data).then((res) => {
       setresult(res)
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="text-center">
            <h2 style={{ marginTop: "20px" }}><u>
              บทที่4 Differentiation</u>
            </h2>
          </div>
          <Card style={{ marginTop: "20px", marginRight: "0px",margin: "10",backgroundColor: "" }}>
        <div style={{ marginTop: "0px", marginRight: "0px",margin: "10",backgroundColor: "" }}>
           <h5 style={{ marginTop: "20px", marginRight: "110px",margin: "50px"}} >exam:</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>หาค่า Central Difference Approximations: CDA</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>โดยใช้ Richardson Extrapolation</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>สูตร ((2**p)* g(h/2)- g(h))/(2**p - 1)</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>h = 0.64</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>p = 2</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>เมื่อแทนในสูตร ผลลัพธ์ที่ได้คือ 0.36784333333333336</h5>
        </div>
       </Card>

          <Card style={{ marginTop: "10px",alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>h:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={h}
                    onChange={(e) => seth(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>p:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={p}
                    onChange={(e) => setp(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>
            <h4 style={{ marginBottom: "10px" }}>ผลลัพธ์: {result}</h4>

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
export default Differentiation;
