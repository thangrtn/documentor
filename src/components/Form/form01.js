import React, { useState, useEffect } from "react";
import { Col, Form, Container } from "react-bootstrap";
import "./form01.css";
import Form26logo from "../../images/left.svg";
import Form26logoright from "../../images/right.svg";
import axios from "axios";

function Stuform01() {
  const [Title, setTitle] = useState("");
  const [Name, setName] = useState("");
  const [Studentcode, setStudentcode] = useState("");
  const [Semeter, setSemeter] = useState("");
  const [Academicyear, setAcademicyear] = useState("");
  const [Faculty, setFaculty] = useState("");
  const [Department, setDepartment] = useState("");
  const [Level, setLevel] = useState("");
  const [Educationlevel, setEducationlevel] = useState("");
  const [Course, setCourse] = useState("");
  const [Stauts, setStauts] = useState("");
  const [Gpax, setGpax] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Teacher_name, setTeacher_name] = useState("");
  const [To_name, setTo_name] = useState("");
  const [Reason, setReason] = useState("");

  useEffect(() => {
    axios
      .get("/user/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        const userData = res.data.data;
        setEmail(userData["email"]);
        setTitle(userData["title"]);
        setName(userData["name"]);
        setStudentcode(userData["studentInfo"]["student_code"]);
        setSemeter(userData["studentInfo"]["semeter"]);
        setAcademicyear(userData["studentInfo"]["academic_year"]);
        setFaculty(userData["studentInfo"]["faculty"]);
        setDepartment(userData["studentInfo"]["department"]);
        setLevel(userData["studentInfo"]["level"]);
        setEducationlevel(userData["studentInfo"]["education_level"]);
        setCourse(userData["studentInfo"]["course"]);
        setStauts(userData["studentInfo"]["status"]);
        setGpax(userData["studentInfo"]["gpax"]);
        setPhone(userData["studentInfo"]["phone"]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const createForm01 = () => {
    axios
      .post(
        "/transaction/create-ro01",
        {
          title: Teacher_name,
          to_name: To_name,
          reason: Reason,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="ctn">
      <div className="background-content">
        <div className="title">
          <h2 className="htop">คำร้องทั่วไป (RO-01)</h2>
        </div>

        <Container>
          <div className="main-content">
            <h2 className="htop2">ข้อมูลนักศึกษา</h2>
            <div className="form-ro1">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} sm={2} controlId="formGridEmail">
                    <Form.Label>คำนำหน้าชื่อ</Form.Label>
                    <Form.Control
                      as="select"
                      readOnly
                      defaultValue="Choose..."
                      value={Title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    >
                      <option>Choose...</option>
                      <option>นาย</option>
                      <option>นางสาว</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} sm={3} controlId="formGridPassword">
                    <Form.Label>ชื่อ-นามสกุล</Form.Label>
                    <Form.Control
                      type="email"
                      readOnly
                      placeholder="ชื่อ-นามสกุล"
                      value={Name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} sm={3} controlId="formGridPassword">
                    <Form.Label>รหัสนักศึกษา</Form.Label>
                    <Form.Control
                      type="studentcode"
                      readOnly
                      placeholder="รหัสนักศึกษา"
                      value={Studentcode}
                      onChange={(e) => {
                        setStudentcode(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} sm={2} controlId="formGridEmail">
                    <Form.Label>ภาคการศึกษา</Form.Label>
                    <Form.Control
                      as="select"
                      readOnly
                      defaultValue="Choose..."
                      value={Semeter}
                      onChange={(e) => {
                        setSemeter(e.target.value);
                      }}
                    >
                      <option>Choose...</option>
                      <option>1</option>
                      <option>2</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} sm={2} controlId="formGridEmail">
                    <Form.Label>ปีการศึกษา</Form.Label>
                    <Form.Control
                      type="email"
                      readOnly
                      placeholder="ปีการศึกษา"
                      value={Academicyear}
                      onChange={(e) => {
                        setAcademicyear(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={3} controlId="formGridEmail">
                    <Form.Label>คณะ</Form.Label>
                    <Form.Control
                      type="email"
                      readOnly
                      placeholder="คณะ"
                      value={Faculty}
                      onChange={(e) => {
                        setFaculty(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} sm={3} controlId="formGridEmail">
                    <Form.Label>ภาควิชา/สาขาวิชา</Form.Label>
                    <Form.Control
                      type="email"
                      readOnly
                      placeholder="ภาควิชา/สาขาวิชา"
                      value={Department}
                      onChange={(e) => {
                        setDepartment(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} sm={2} controlId="formGridState">
                    <Form.Label>ระดับการศึกษา</Form.Label>
                    <Form.Control
                      as="select"
                      readOnly
                      defaultValue="Choose..."
                      value={Educationlevel}
                      onChange={(e) => {
                        setEducationlevel(e.target.value);
                      }}
                    >
                      <option>Choose...</option>
                      <option>ปริญญาตรี</option>
                      <option>ปริญญาโท</option>
                      <option>ปริญญาเอก</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} sm={2} controlId="formGridState">
                    <Form.Label>หลักสูตร</Form.Label>
                    <Form.Control
                      as="select"
                      readOnly
                      defaultValue="Choose..."
                      value={Course}
                      onChange={(e) => {
                        setCourse(e.target.value);
                      }}
                    >
                      <option>Choose...</option>
                      <option>ทั่วไป</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} sm={2} controlId="formGridZip">
                    <Form.Label>ชั้นปี</Form.Label>
                    <Form.Control
                      readOnly
                      placeholder="ชั้นปี"
                      value={Level}
                      onChange={(e) => {
                        setLevel(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={2} controlId="formGridState">
                    <Form.Label>สภาพนักศึกษา</Form.Label>
                    <Form.Control
                      as="select"
                      readOnly
                      defaultValue="Choose..."
                      value={Stauts}
                      onChange={(e) => {
                        setStauts(e.target.value);
                      }}
                    >
                      <option>Choose...</option>
                      <option>ปกติ</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} sm={2} controlId="formGridEmail">
                    <Form.Label>GPAX</Form.Label>
                    <Form.Control
                      type="email"
                      readOnly
                      placeholder="GPAX"
                      value={Gpax}
                      onChange={(e) => {
                        setGpax(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} sm={4} controlId="formGridEmail">
                    <Form.Label>เบอร์โทร</Form.Label>
                    <Form.Control
                      type="email"
                      readOnly
                      placeholder="เบอร์โทร"
                      value={Phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} sm={4} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      readOnly
                      placeholder="Email"
                      value={Email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
              <div class="form-ro1-bottom">
                <h2 ClassName="htop2">กรอกคำร้อง</h2>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} sm={4} controlId="formGridEmail">
                      <Form.Label>เรื่อง</Form.Label>
                      <Form.Control
                        type="เรื่อง"
                        placeholder="เรื่อง"
                        value={Teacher_name}
                        onChange={(e) => {
                          setTeacher_name(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} sm={4} controlId="formGridEmail">
                      <Form.Label>เรียน</Form.Label>
                      <Form.Control
                        type="เรียน"
                        placeholder="เรียน"
                        value={To_name}
                        onChange={(e) => {
                          setStauts(e.target.value);
                        }}
                      >
                        <option>Choose...</option>
                        <option>active</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} sm={2} controlId="formGridEmail">
                      <Form.Label>GPAX</Form.Label>
                      <Form.Control
                        type="email"
                        readOnly
                        placeholder="GPAX"
                        value={Gpax}
                        onChange={(e) => {
                          setGpax(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} sm={4} controlId="formGridEmail">
                      <Form.Label>เบอร์โทร</Form.Label>
                      <Form.Control
                        type="email"
                        readOnly
                        placeholder="เบอร์โทร"
                        value={Phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} sm={4} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        readOnly
                        placeholder="Email"
                        value={Email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form.Row>
                </Form>
                <div class="form-ro1-bottom">
                  <h2 ClassName="htop2">กรอกคำร้อง</h2>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} sm={4} controlId="formGridEmail">
                        <Form.Label>เรื่อง</Form.Label>
                        <Form.Control
                          type="เรื่อง"
                          placeholder="เรื่อง"
                          value={Teacher_name}
                          onChange={(e) => {
                            setTeacher_name(e.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group as={Col} sm={4} controlId="formGridEmail">
                        <Form.Label>เรียน</Form.Label>
                        <Form.Control
                          type="เรียน"
                          placeholder="เรียน"
                          value={To_name}
                          onChange={(e) => {
                            setTo_name(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group
                        as={Col}
                        sm={12}
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>เนื่องจาก</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="มีความประสงค์(โปรดระบุโดยรายละเอียด)"
                          value={Reason}
                          onChange={(e) => {
                            setReason(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Form.Row>
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <h2 className="htop2">กรุณาระบุความคิดเห็นหรือข้อเสนอแนะ</h2>
            <div className="form-ro1">
              <Form>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    sm={12}
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>กรุณาระบุความคิดเห็นหรือข้อเสนอแนะ</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="กรุณาระบุความคิดเห็นหรือข้อเสนอแนะ"
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>
          </div>

          <div className="btng">
            <button
              className="btn-approve"
              onClick={() => {
                Stuform01();
              }}
            >
              <img className="iconleft" src={Form26logo} alt="left" /> ยกเลิก{" "}
            </button>
            <button
              className="btn-approve2"
              onClick={() => {
                createForm01();
              }}
            >
              ยืนยัน{" "}
              <img className="iconright" src={Form26logoright} alt="right" />
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Stuform01;
