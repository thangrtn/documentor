import React, { useState , useEffect } from 'react';
import { Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './r16.css';
import axios from "axios";
import Form26logo from "../../images/left.svg";
import Form26logoright from "../../images/right.svg";
import { useHistory } from "react-router-dom";

export default function Form16(prop) {
    let history   = useHistory();    
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
    const [To_name, setTo_name] = useState("");
    const [Reason, setReason] = useState("");
    const [Attach_one, setAttach_one] = useState("");
    const [Attach_two, setAttach_two] = useState("");
    const [Wish, setWish] = useState("");
    const [Time_period, setTime_period] = useState("");
    const [Start_date, setStart_date] = useState("");
    const [End_date, setEnd_date] = useState("");
    const [Comment, setComment]    = useState("");
  
    useEffect(() => {
    const id = prop.match.params.id
      axios
        .get(`/transaction/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          const userData = res.data.data.user;
          const detail   = res.data.data.mapping.documentRO16
          const sdate    =  detail["startDate"].slice(0,10)
          const edate    =  detail["endDate"].slice(0,10)
          console.log(res.data.data)
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
            setTo_name(detail["to_name"])
            setAttach_one(detail["attach_one"])
            setAttach_two(detail["attach_two"])
            setWish(detail["wish"])
            setTime_period(detail["time_period"])
            setStart_date(sdate)
            setEnd_date(edate)
            setReason(detail['reason'])
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
  
    const ApproveForm = () => {
        const id = prop.match.params.id
      axios
        .patch(
          `/transaction/${id}`,{
            comment : Comment
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        )
        .then((response) => {
          if(response.data.status){
            history.push('/transection_status/RO-16')
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    return (
      <div className="ctn">
        <div className="background-content">
          <div className="title">
            <h2 className="htop">คำร้องขอลาป่วย/ลาป่วย (RO-16)</h2>
          </div>
  
          <Container>
            <div className="main-content">
              <h2 className="htop2">ข้อมูลนักศึกษา</h2>
              <div className="form-ro1">
              <Form>
                  <Form.Row>
                    <Form.Group as={Col} sm={2} >
                    <Form.Label>คำนำหน้าชื่อ</Form.Label>
                    <Form.Control
                      readOnly
                      placeholder="คำนำหน้าชื่อ"
                      value={Title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={3} >
                      <Form.Label>ชื่อ-นามสกุล</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="ชื่อ-นามสกุล"
                        value={Name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={3} >
                      <Form.Label>รหัสนักศึกษา</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="รหัสนักศึกษา"
                        value={Studentcode}
                        onChange={(e) => {
                          setStudentcode(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={2} >
                      <Form.Label>ภาคการศึกษา</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="ภาคการศึกษา"
                        value={Semeter}
                        onChange={(e) => {
                          setSemeter(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={2} >
                      <Form.Label>ปีการศึกษา</Form.Label>
                      <Form.Control
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
                    <Form.Group as={Col} sm={3} >
                      <Form.Label>คณะ</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="คณะ"
                        value={Faculty}
                        onChange={(e) => {
                          setFaculty(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={3} >
                      <Form.Label>ภาควิชา/สาขาวิชา</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="ภาควิชา/สาขาวิชา"
                        value={Department}
                        onChange={(e) => {
                          setDepartment(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={3} >
                      <Form.Label>ระดับการศึกษา</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="ระดับการศึกษา"
                        value={Educationlevel}
                        onChange={(e) => {
                          setEducationlevel(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={3} >
                      <Form.Label>หลักสูตร</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="หลักสูตร"
                        value={Course}
                        onChange={(e) => {
                          setCourse(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={2} >
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
                    <Form.Group as={Col} sm={2} >
                      <Form.Label>สภาพนักศึกษา</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="สภาพนักศึกษา"
                        value={Stauts}
                        onChange={(e) => {
                          setStauts(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={2} >
                      <Form.Label>GPAX</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="GPAX"
                        value={Gpax}
                        onChange={(e) => {
                          setGpax(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={4} >
                      <Form.Label>เบอร์โทร</Form.Label>
                      <Form.Control
                        readOnly
                        placeholder="เบอร์โทร"
                        value={Phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </Form.Group>
  
                    <Form.Group as={Col} sm={4} >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
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
                
                <div className="form-ro1-bottom">
                  <h2 className="htop2">กรอกคำร้อง</h2>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} sm={4} >
                        <Form.Label>เรียน</Form.Label>
                        <Form.Control
                          readOnly
                          placeholder="เรียน"
                          value={To_name}
                          onChange={(e) => {
                            setTo_name(e.target.value);
                          }}
                        />
                      </Form.Group>
  
                      <Form.Group as={Col} sm={4} >
                        <Form.Label>Attach</Form.Label>
                        <Form.Control
                          readOnly
                          placeholder="Attach"
                          value={Attach_one}
                          onChange={(e) => {
                            setAttach_one(e.target.value);
                          }}
                        />
                      </Form.Group>
  
                      <Form.Group as={Col} sm={4}>
                        <Form.Label>Attach2</Form.Label>
                        <Form.Control
                          readOnly
                          placeholder="Attach2"
                          value={Attach_two}
                          onChange={(e) => {
                            setAttach_two(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Form.Row>
  
                    <Form.Row>
                        <Form.Group as={Col} sm={4}>
                            <Form.Label>ความประสงค์</Form.Label>
                            <Form.Control
                            readOnly
                            placeholder="ความประสงค์"
                            value={Wish}
                            onChange={(e) => {
                                setWish(e.target.value);
                            }}
                            />
                        </Form.Group>
  
                      <Form.Group as={Col} sm={2}>
                        <Form.Label>ระยะเวลา</Form.Label>
                        <Form.Control
                          readOnly
                          placeholder="ระยะเวลา"
                          value={Time_period}
                          onChange={(e) => {
                            setTime_period(e.target.value);
                          }}
                        />
                      </Form.Group>
  
                      <Form.Group as={Col} sm={3} >
                        <Form.Label>ตั้งแต่วันที่</Form.Label>
                        <Form.Control
                         readOnly
                          type="date"
                          name="dob"
                          value={Start_date}
                          onChange={(e) => {
                            setStart_date(e.target.value);
                          }}
                        />
                      </Form.Group>
  
                      <Form.Group as={Col} sm={3} >
                        <Form.Label>ถึงวันที่</Form.Label>
                        <Form.Control
                         readOnly
                          type="date"
                          name="dob"
                          placeholder="Date of Expire"
                          value={End_date}
                          onChange={(e) => {
                            setEnd_date(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Form.Row>
  
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        sm={12}
                      >
                        <Form.Label>เนื่องจาก</Form.Label>
                        <Form.Control
                          readOnly
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

            <div className="main-content">
              <h2 className="htop2">กรุณาระบุความคิดเห็นหรือข้อเสนอแนะ</h2>
              <div className="form-ro1">
                <Form>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      sm={12}
                    >
                      <Form.Label>กรุณาระบุความคิดเห็นหรือข้อเสนอแนะ</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="กรุณาระบุความคิดเห็นหรือข้อเสนอแนะ"
                        value={Comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
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
                        history.push('/teacher_request_list')
                    }}
                >
                    <img className="iconleft" src={Form26logo} alt="left" /> ยกเลิก{" "}
                </button>
              <button
                className="btn-approve2"
                onClick={() => {
                    ApproveForm();
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

