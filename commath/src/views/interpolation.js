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
import { getInterpolation } from "../functions/function";

function Interpolation() {
  const navigate = useNavigate();
  const [x, setx] = useState(5);
  const [xi1, setxi1] = useState(0);
  const [xi2, setxi2] = useState(8);
  const [xi3, setxi3] = useState(14);
  const [xi4, setxi4] = useState(20);
  const [xi5, setxi5] = useState(23);
  const [xi6, setxi6] = useState(30);
  const [yi1, setyi1] = useState(0);
  const [yi2, setyi2] = useState(50);
  const [yi3, setyi3] = useState(96);
  const [yi4, setyi4] = useState(110);
  const [yi5, setyi5] = useState(100);
  const [yi6, setyi6] = useState(86);

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      x:x,
      xi:[xi1,xi2,xi3,xi4,xi5,xi6],
      yi:[yi1,yi2,yi3,yi4,yi5,yi6]
      
    };
    getInterpolation(data).then((res) => {
        setresult(`วินาทีที่ ${x} จะมีความเร็วประมาณ ${res}`)
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>
        <Col sm="6">
        <div className="text-center">
           <h2 style={{ marginTop: "20px" }}><u>บทที่3 Interpolation</u></h2>
        </div>
        <Card style={{ marginTop: "20px", marginRight: "0px",margin: "10",backgroundColor: "" }}>
        <div style={{ marginTop: "0px", marginRight: "0px",margin: "10",backgroundColor: "" }}>
           <h5 style={{ marginTop: "50px", marginRight: "110px",margin: "50px"}} >exam:</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>เมื่อให้เวลาคือ t (วินาที) , ความเร็วคือ v (เมตร/วินาที)</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>t เป็นเวลาตามแนวนอนหรือแกน x , v เป็นความเร็วตามแนวตั้งหรือแกน y</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>ถ้า t ที่ต้องการหา = 5</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>ให้</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>t = [ 0, 8, 14, 20, 23, 30 ]</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>v = [ 0, 50, 96, 110, 100, 86 ]</h5>
           <h5 style={{ marginRight: "110px",margin: "50px"}}>ความเร็ว ณ วินาทีที่ 5 เป็นเท่าใด</h5>
        </div>
       </Card>
          <Card style={{marginTop: "10px", alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>t:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={x}
                    onChange={(e) => setx(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                    xi:
                  </h3>

                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi1}
                    onChange={(e) => setxi1(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi2}
                    onChange={(e) => setxi2(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi3}
                    onChange={(e) => setxi3(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi4}
                    onChange={(e) => setxi4(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi5}
                    onChange={(e) => setxi5(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={xi6}
                    onChange={(e) => setxi6(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    // onChange={(e) => setxi6(e.target.value)}
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                    yi:
                  </h3>

                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi1}
                    onChange={(e) => setyi1(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi2}
                    onChange={(e) => setyi2(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi3}
                    onChange={(e) => setyi3(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi4}
                    onChange={(e) => setyi4(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi5}
                    onChange={(e) => setyi5(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={yi6}
                    onChange={(e) => setyi6(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    // onChange={(e) => setxi6(e.target.value)}
                  />
                </Row>
              </div>
            </Row>
                <h4 style={{ marginBottom: "10px" }}>ผลลัพธ์ : {result}</h4>

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

export default Interpolation;
