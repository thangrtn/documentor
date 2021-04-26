import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './services.css'


const services = () => {
    return (
        <div className="box-ct">
            <h1 className="texthead">แบบฟอร์มเอกสาร</h1>
            <Row className="r-100">
                <Col className="m-auto" sm={4}>
                    <button className="btn-form">คำร้องทั่วไป</button>
                </Col>
                <Col className="m-auto" sm={4}>
                    <button className="btn-form">คำขอลาป่วย /ลากิจ</button>
                </Col>
                <Col className="m-auto" sm={4}>
                    <button className="btn-form">ใบลงทะเบียน เพิ่ม-ลด-ถอน-เปลี่ยนกลุ่ม-เปลี่ยนรายวิชา</button>
                </Col>
            </Row>
        </div>
    )
}

export default services;
