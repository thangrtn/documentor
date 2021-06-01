import React, { useState, useEffect } from "react";
import "./main-teacher.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Mteacher() {
  const [ListRequest, setListRequest] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get(`/transaction/?sort=name&page=${count}&limit=10&filter_type=&order=acs`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
          res.data.data.map((data) => {
            setListRequest(ListRequest => [...ListRequest, data]);
          })
      })
      .catch((err) => {
        console.error(err)
      });
  }, [count]);

  return (
    <div className="content">  
      <Container>
        <div className="top-x">
          <h2>คำร้องขอที่รอพิจารณา</h2>
        </div>

        <div className="top-box">
          <Row>
                { (ListRequest.length) > 0 ? (ListRequest.map(function(item ,index) {
                  return (
                    <Col sm={12} key={index}>
                        <div className="top-box-new">
                            <div className="bx-new">
                              <Form.Row>
                                  <Form.Group as={Col} sm={2}>
                                      {item['create_date'].slice(0 , 10)}
                                  </Form.Group>

                                  <Form.Group as={Col} sm={3}>
                                      {item['type']['type_name']}
                                  </Form.Group>

                                  <Form.Group as={Col} sm={3}>
                                      {item['user']['name']}
                                  </Form.Group>

                                  <Form.Group as={Col} sm={2}>
                                      {item['user']['studentInfo']['student_code']}
                                  </Form.Group>

                                  <Form.Group as={Col} sm={2}>
                                      <Link className="btn-cl" to={`/${item['type']['type_name'].slice(0,5)}/${item.id}`}>รายละเอียด</Link>
                                  </Form.Group>
                              </Form.Row>
                            </div>
                        </div>
                    </Col>
                  )}
                  )) : ('')
                };     
          </Row>
        </div>
        <div className="bth-group">
          { ((count >= 1) && (ListRequest.length === 10) )  ? (
              <button className="btn-next" onClick={() => setCount(count + 1)}>
                Next
              </button>
            ) : ''
          }
        </div>
      </Container>
      <div className="logo"></div>
    </div>
  );
}

export default Mteacher;
