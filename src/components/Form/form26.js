import React from 'react';
import { Col , Row} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Form26logo from '../../images/left.svg'
import Form26logoright from '../../images/right.svg'
import Form26logopolygon from '../../images/Polygon.svg'
import './form26.css';


 
export default function StuForm26() {
    return (
        <div className="ctn2">
            <div className="background-content">
                <div className="title"><h2 className="htop">คำร้องขอลาป่วย/ลาป่วย (RO-26)</h2></div>
                
                <Container>
                    <div className="main-content">
                        <h2 className="htop2">ข้อมูลนักศึกษา</h2>
                            <div className="form-ro1">
                                
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} sm={2} controlId="formGridEmail">
                                            <Form.Label>คำนำหน้าชื่อ</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>นาย</option>
                                                <option>นางสาว</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} sm={3} controlId="formGridPassword">
                                            <Form.Label>ชื่อ-นามสกุล</Form.Label>
                                            <Form.Control type="email" placeholder="ชื่อ-นามสกุล" />
                                        </Form.Group>

                                        <Form.Group as={Col} sm={3} controlId="formGridPassword">
                                            <Form.Label>รหัสนักศึกษา</Form.Label>
                                            <Form.Control type="email" placeholder="รหัสนักศึกษา" />
                                        </Form.Group>

                                        <Form.Group as={Col} sm={2} controlId="formGridEmail">
                                            <Form.Label>ภาคการศึกษา</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} sm={2} controlId="formGridEmail">
                                            <Form.Label>ปีการศึกษา</Form.Label>
                                            <Form.Control type="email" placeholder="ปีการศึกษา" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} sm={3} controlId="formGridEmail">
                                            <Form.Label>คณะ</Form.Label>
                                            <Form.Control type="email" placeholder="คณะ" />
                                        </Form.Group>

                                        <Form.Group as={Col} sm={3} controlId="formGridEmail">
                                            <Form.Label>ภาควิชา/สาขาวิชา</Form.Label>
                                            <Form.Control type="email" placeholder="ภาควิชา/สาขาวิชา" />
                                        </Form.Group>


                                        <Form.Group as={Col} sm={2} controlId="formGridState">
                                        <Form.Label>ระดับการศึกษา</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>ปริญญาตรี</option>
                                            <option>ปริญญาโท</option>
                                            <option>ปริญญาเอก</option>
                                        </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} sm={2} controlId="formGridState">
                                        <Form.Label>หลักสูตร</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>ปกติ</option>
                                        </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} sm={2} controlId="formGridZip">
                                        <Form.Label>ชั้นปี</Form.Label>
                                        <Form.Control placeholder="ชั้นปี" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} sm={2} controlId="formGridState">
                                            <Form.Label>สภาพนักศึกษา</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>ปกติ</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} sm={2} controlId="formGridEmail">
                                                <Form.Label>GPAX</Form.Label>
                                                <Form.Control type="email" placeholder="GPAX" />
                                        </Form.Group>

                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                <Form.Label>เบอร์โทร</Form.Label>
                                                <Form.Control type="email" placeholder="เบอร์โทร" />
                                        </Form.Group>

                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                    </Form.Row>
                                </Form>

                            <div class="form-ro1-bottom">
                                <h2 ClassName="htop3">กรอกคำร้อง</h2>
                                <Row>
                                    <Col sm={6}>
                                        <div className="form-left">
                                            <div>
                                                <h2 ClassName="row-1"><img className="iconpolygon" src={Form26logopolygon} alt="polygon"/>เพิ่มรายวิชา</h2>
                                                <Form>
                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="email" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 
                                                </Form>
                                            </div>
                                            <div>
                                                <h2 ClassName="htop2"><img className="iconpolygon" src={Form26logopolygon} alt="polygon"/>ถอนรายวิชา</h2>
                                                <Form>
                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row>

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-right">
                                            <div>
                                                <h2 ClassName="row-1"><img className="iconpolygon" src={Form26logopolygon} alt="polygon"/>ลดรายวิชา</h2>
                                                <Form>
                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="email" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 
                                                </Form>
                                            </div>
                                            <div>
                                                <h2 ClassName="htop2"><img className="iconpolygon" src={Form26logopolygon} alt="polygon"/>เปลี่ยนกลุ่มรายวิชา</h2>
                                                <Form>
                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="email" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row>

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="email" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่" />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต" />
                                                        </Form.Group>
                                                    </Form.Row> 
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </div>

                    

                    <div className="btng">
                        <button className="btn-approve" onClick={() => {StuForm26()}} ><img className="iconleft" src={Form26logo} alt="left"/> ยกเลิก </button>
                        <button className="btn-approve2" onClick={() => {StuForm26()}} >ยืนยัน <img className="iconright" src={Form26logoright} alt="right"/></button> 
    
                    </div>
                </Container>
            </div>
        </div>
    )
}