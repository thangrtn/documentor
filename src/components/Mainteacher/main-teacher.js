import React, { useEffect, useState } from 'react';
import './main-teacher.css';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';

function Mteacher() {
    const history = useHistory();
    const [documents, setDocuments] = useState(null);

    const routeChange = () => {
        let path = `form1`;
        history.push(path);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        async function getDocument() {
            console.log(localStorage.getItem('token'));
            try {
                let data = await axios.get(
                    '/transaction/?sort=&page=1&limit=10&filter_type=&order=',
                    {
                        headers: {
                            Authorization: localStorage.getItem('token')
                        }
                    }
                );
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        await getDocument();
    }, []);

    return (
        <div class='ctnm'>
            <div className='top-text'>
                <div className='top-x'>
                    <h2>คำร้องขอที่รอพิจารณา</h2>
                </div>

                <div className='top-b'>
                    <button className='btnn'>
                        วันที่ล่าสุด <FaChevronDown />
                    </button>
                    <button className='btnn'>
                        ประเภทคำร้อง <FaChevronDown />
                    </button>
                    <button className='btnn'>
                        เรียงตามชื่อ <FaChevronDown />
                    </button>
                    <button className='btnn'>
                        เรียงตามรหัส <FaChevronDown />
                    </button>
                </div>

                <div className='top-box'>
                    <Row>
                        <Col sm={12}>
                            <div className='top-box-new'>
                                <div className='bx-new'>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} sm={2}>
                                                04/22/64
                                            </Form.Group>

                                            <Form.Group as={Col} sm={2}>
                                                RO-01
                                            </Form.Group>

                                            <Form.Group as={Col} sm={2}>
                                                คำร้องทั่วไป
                                            </Form.Group>

                                            <Form.Group as={Col} sm={2}>
                                                มาลี สวยมาก
                                            </Form.Group>

                                            <Form.Group as={Col} sm={2}>
                                                60090500499
                                            </Form.Group>

                                            <Button
                                                as={Col}
                                                sm={2}
                                                onClick={routeChange}
                                            >
                                                ดูรายละเอียด
                                            </Button>
                                        </Form.Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Mteacher;
