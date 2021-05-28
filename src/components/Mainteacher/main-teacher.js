import React, { useState, useEffect } from "react";
import "./main-teacher.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function Mteacher() {
  const [ListRequest, setListRequest] = useState([]);

  useEffect(() => {
    axios
      .get("/transaction/?sort=name&page=1&limit=10&filter_type=&order=acs", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
          res.data.data.map((data , index) => {
            setListRequest(ListRequest => [...ListRequest, data]);
          })
      })
      .catch((err) => {
        console.error(err)
      });
  }, []);

  return (
    <div className="content">  
      <Container>
        <div className="top-x">
          <h2>คำร้องขอที่รอพิจารณา</h2>
        </div>

        <div className="top-b">
          <button className="btnn">
            วันที่ล่าสุด <FaChevronDown />
          </button>
          <button className="btnn">
            ประเภทคำร้อง <FaChevronDown />
          </button>
          <button className="btnn">
            เรียงตามชื่อ <FaChevronDown />
          </button>
          <button className="btnn">
            เรียงตามรหัส <FaChevronDown />
          </button>
        </div>

        <div className="top-box">
          <Row>
                {ListRequest.map((item ,index) => {
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
                    );
                })};       
          </Row>
        </div>
      </Container>
      <div className="logo"></div>
    </div>
  );
}

export default Mteacher;
