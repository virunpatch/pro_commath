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
import { getRootFinding } from "../functions/function";

function RootFinding() {
  const navigate = useNavigate();
  const [a, seta] = useState(0);
  const [b, setb] = useState(1);
  const [dx, setdx] = useState(0.0001);
  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };


  const generate = () => {
    const data = {
      a: a,
      b: b,
      dx: dx
    };
    getRootFinding(data).then((res) => {
      setresult(res);
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>
        <Col sm="6">
          <div className="text-center">
            <h2 style={{ marginTop: "20px", marginRight: "20px" }}><u>
              บทที่6 Root-finding</u>
            </h2>
          </div>
          <Card style={{ marginTop: "20px", marginRight: "0px",margin: "10",backgroundColor: "" }}>
        <div style={{ marginTop: "0px", marginRight: "0px",margin: "10",backgroundColor: "" }}>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>การหาคำตอบของสมการ f(x)=0 หมายถึงการหาค่า x ที่จำทำให้สมการ f(x) มีค่าเป็นศูนย์ คำตอบของสมการเรียกอีกอย่างว่า root ซึ่งแต่ละฟังก์ชันอาจมี 0, 1, หรือ หลายคำตอบก็ได้</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>หาคำตอบโดยใช้ Incremental Search Method</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>เมื่อโจทย์กำหนด f(x1) และ f(x2) มีค่าที่เป็นบวกหรือลบต่างกัน เราอาจจะเดาได้ว่าระหว่างค่า (x1,x2) จะมีค่า xi ที่ทำให้ f(xi)=0</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>ดังนั้นวิธีการค้นหา xi จึงเกิดจากการหาค่า f(xi) ไปเรื่อยจนกว่าจะเจอ โดยให้ xi=x1+i∗Δ โดยจะต้องกำหนด Δ ให้มีขนาดเล็กพอที่จะค้นหา root เจอ</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>กำหนด f(x) = x**3−10*x**2+5 จงหารากของสมการ f(x) * จะเห็นว่าเมื่อ x=0 แล้ว sign(f(0)) จะมีค่าเป็น + * เมื่อ x=1 แล้ว sign(f(1)) จะมีค่าเป็น - * สันนิษฐานว่า root จะมีค่าอยู่ระหว่าง (0,1) จงหา root ของ f(x) ให้มีค่าใกล้เคียง 4 หลัก โดยเราจะใช้ Δ=0.0001</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>ผลลัพธ์ที่ได้ : 0.7346499999999354 </h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}></h5>
        </div>
       </Card>

          <Card style={{ marginTop: "10px",alignItems: "center" }}>
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
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>dx:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={dx}
                    onChange={(e) => setdx(e.target.value)}
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

        <Col sm="3"></Col>
      </Row>
    </div>
  );
}
export default RootFinding;
