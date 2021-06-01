import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './services.css'
import { Link } from 'react-router-dom';


const services = () => {
    return (
        <div className="logo-service">
        <div className="box-ct">
            <h1 className="texthead">แบบฟอร์มเอกสาร</h1>
            <Row className="r-100">
                <Col className="m-auto" sm={4}>
                <Link className="line" to="/form1">

                    <button className="btn-form">คำร้องทั่วไป</button>
                </Link>
                </Col>
                <Col className="m-auto" sm={4}>
                    <Link className="line" to="/form16">
                        <button className="btn-form">คำขอลาป่วย /ลากิจ</button>
                    </Link>
                </Col>
                <Col className="m-auto" sm={4}>
                    <Link className="line" to="/form26">
                        <button className="btn-form">ใบลงทะเบียน เพิ่ม-ลด-ถอน-เปลี่ยนกลุ่ม-เปลี่ยนรายวิชา</button>
                    </Link>
                    
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default services;

