import React, { useState, useEffect } from "react";
import { Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './r26.css';
import { useHistory } from "react-router-dom";
import axios from "axios";
import Form26logo from "../../images/left.svg";
import Form26logoright from "../../images/right.svg";
 
export default function Form26(prop) {
    let history = useHistory();
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
    }, [prop.match.params.id]);
  
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
          history.push('/transection_status/RO-26')
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
    return (
      <div className="ctn2">
        <div className="background-content">
          <div className="title">
            <h2 className="htop">????????????????????????????????????????????????-??????-?????????-????????????????????????????????????-?????????????????????????????????????????? (RO-26)</h2>
          </div>
  
          <Container>
            <div className="main-content">
              <h2 className="htop2">??????????????????????????????????????????</h2>
              <div className="form-ro1">
                <div className="form-ro1">
                  <div className="form-ro1">
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col} sm={2}>
                          <Form.Label>????????????????????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="????????????????????????????????????"
                            value={Title}
                            onChange={(e) => {
                              setTitle(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={3}>
                          <Form.Label>????????????-?????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="????????????-?????????????????????"
                            value={Name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={3}>
                          <Form.Label>????????????????????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="????????????????????????????????????"
                            value={Studentcode}
                            onChange={(e) => {
                              setStudentcode(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={2}>
                          <Form.Label>?????????????????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="?????????????????????????????????"
                            value={Semeter}
                            onChange={(e) => {
                              setSemeter(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={2}>
                          <Form.Label>??????????????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="??????????????????????????????"
                            value={Academicyear}
                            onChange={(e) => {
                              setAcademicyear(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </Form.Row>
  
                      <Form.Row>
                        <Form.Group as={Col} sm={3}>
                          <Form.Label>?????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="?????????"
                            value={Faculty}
                            onChange={(e) => {
                              setFaculty(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={3}>
                          <Form.Label>?????????????????????/????????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="?????????????????????/????????????????????????"
                            value={Department}
                            onChange={(e) => {
                              setDepartment(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={3}>
                          <Form.Label>???????????????????????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="???????????????????????????????????????"
                            value={Educationlevel}
                            onChange={(e) => {
                              setEducationlevel(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={3}>
                          <Form.Label>????????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="????????????????????????"
                            value={Course}
                            onChange={(e) => {
                              setCourse(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={2}>
                          <Form.Label>??????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="??????????????????"
                            value={Level}
                            onChange={(e) => {
                              setLevel(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </Form.Row>
  
                      <Form.Row>
                        <Form.Group as={Col} sm={2}>
                          <Form.Label>????????????????????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="????????????????????????????????????"
                            value={Stauts}
                            onChange={(e) => {
                              setStauts(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={2}>
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
  
                        <Form.Group as={Col} sm={4}>
                          <Form.Label>????????????????????????</Form.Label>
                          <Form.Control
                            readOnly
                            placeholder="????????????????????????"
                            value={Phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </Form.Group>
  
                        <Form.Group as={Col} sm={4}>
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
  
                    {/* <div className="form-ro1-bottom">
                      <h2 className="htop3">??????????????????????????????????????????</h2>
                      <div className="list-request">
                        {ListRequest.map((value, index) => {
                          return (
                            <Form.Row className="box-list" key={index}>
                              <Form.Group as={Col} sm={3}>
                                <Form.Label>????????????????????????</Form.Label>
                                <Form.Control
                                  readOnly
                                  placeholder="????????????????????????"
                                  value={value.course_code}
                                />
                              </Form.Group>
                              <Form.Group as={Col} sm={2}>
                                <Form.Label>???????????????</Form.Label>
                                <Form.Control
                                  readOnly
                                  type="number"
                                  placeholder="????????????????????????"
                                  value={value.group_number}
                                />
                              </Form.Group>
                              <Form.Group as={Col} sm={2}>
                                <Form.Label>????????????????????????</Form.Label>
                                <Form.Control
                                  readOnly
                                  type="number"
                                  placeholder="????????????????????????"
                                  value={value.credit}
                                />
                              </Form.Group>
                              <Form.Group as={Col} sm={3} >
                                <Form.Label>??????????????????</Form.Label>
                                <Form.Control 
                                as="select"
                                readOnly 
                                value={value.type}
                                >
                                  <option value="">Choose...</option>
                                  <option value="ADD_SUBJECT">
                                    ????????????????????????????????????
                                  </option>
                                  <option value="CHANGE_COURSE">???????????????????????????</option>
                                  <option value="WITHDRAWAL">??????????????????????????????</option>
                                </Form.Control>
                              </Form.Group>
                            </Form.Row>
                          );
                        })}
                        ;
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="main-content">
              <h2 className="htop2">??????????????????????????????????????????????????????????????????????????????????????????????????????</h2>
              <div className="form-ro1">
                <Form>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      sm={12}
                    >
                      <Form.Label>??????????????????????????????????????????????????????????????????????????????????????????????????????</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="??????????????????????????????????????????????????????????????????????????????????????????????????????"
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
                className="btn-approve-update1"
                onClick={() => {
                  history.push('/teacher_request_list')
                }}
              >
                <img className="iconleft" src={Form26logo} alt="left" /> ??????????????????{" "}
              </button>
              <button
                className="btn-approve-update2"
                onClick={() => {
                  ApproveForm();
                }}
              >
                ??????????????????{" "}
                <img className="iconright" src={Form26logoright} alt="right" />
              </button>
            </div>
          </Container>
        </div>
      </div>
    );
}

