import React, { useState, useEffect }from 'react';
import { Col , Row} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Form26logo from '../../images/left.svg'
import Form26logoright from '../../images/right.svg'
import Form26logopolygon from '../../images/Polygon.svg'
import './form26.css';
import axios from 'axios';


 
export default function StuForm26() {
    const [Title, setTitle] = useState('');
    const [Name, setName] = useState('');
    const [Studentcode, setStudentcode] = useState('');
    const [Semeter, setSemeter] = useState('');
    const [Academicyear, setAcademicyear] = useState('');
    const [Faculty, setFaculty] = useState('');
    const [Department, setDepartment] = useState('');
    const [Level, setLevel] = useState('');
    const [Educationlevel, setEducationlevel] = useState('');
    const [Course, setCourse] = useState('');
    const [Stauts, setStauts] = useState('');
    const [Gpax, setGpax] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Course_code, setCourse_code] = useState('');
    const [Group_number, setGroup_number] = useState('');
    const [Credit, setCredit] = useState('');
    const [Type, setType] = useState('');
    


    useEffect(() => {
        axios.get('/user/me', {
            headers: { 
                'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then(res => {
            const userData = res.data.data
            setEmail(userData['email'])
            setTitle(userData['title'])
            setName(userData['name'])
            setStudentcode(userData['studentInfo']['student_code'])
            setSemeter(userData['studentInfo']['semeter'])
            setAcademicyear(userData['studentInfo']['academic_year'])
            setFaculty(userData['studentInfo']['faculty'])
            setDepartment(userData['studentInfo']['department'])
            setLevel(userData['studentInfo']['level'])
            setEducationlevel(userData['studentInfo']['education_level'])
            setCourse(userData['studentInfo']['course'])
            setStauts(userData['studentInfo']['status'])
            setGpax(userData['studentInfo']['gpax'])
            setPhone(userData['studentInfo']['phone'])

        }).catch(err => {
            console.error(err)
        })
      },[]);

      const createForm26 = () => {
        axios.post('/transaction/create-ro26', 
        {
            course_code : Course_code,
            group_number : Group_number,
            credit : Credit,
            type : Type
            
        },
        {headers: { 
            'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')
        }}).then((response) => {
            console.log(response.data);

        }).catch((error) => {
            console.error(error);
        }) 
    };


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
                                                <Form.Control as="select" readOnly defaultValue="Choose..." 
                                                value={Title}
                                                onChange={(e) => {
                                                    setTitle(e.target.value);
                                                }} >
                                                    <option>Choose...</option>
                                                    <option>นาย</option>
                                                    <option>นางสาว</option>
                                                </Form.Control>
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={3} controlId="formGridPassword">
                                                <Form.Label>ชื่อ-นามสกุล</Form.Label>
                                                <Form.Control type="email" readOnly placeholder="ชื่อ-นามสกุล" 
                                                value={Name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }} />
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={3} controlId="formGridPassword">
                                                <Form.Label>รหัสนักศึกษา</Form.Label>
                                                <Form.Control type="studentcode" readOnly placeholder="รหัสนักศึกษา"
                                                value={Studentcode}
                                                onChange={(e) => {
                                                    setStudentcode(e.target.value);
                                                }} />
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={2} controlId="formGridEmail">
                                                <Form.Label>ภาคการศึกษา</Form.Label>
                                                <Form.Control as="select" readOnly defaultValue="Choose..."
                                                value={Semeter}
                                                onChange={(e) => {
                                                    setSemeter(e.target.value);
                                                }}>
                                                    <option>Choose...</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </Form.Control>
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={2} controlId="formGridEmail">
                                                <Form.Label>ปีการศึกษา</Form.Label>
                                                <Form.Control type="email" readOnly placeholder="ปีการศึกษา"
                                                value={Academicyear}
                                                onChange={(e) => {
                                                    setAcademicyear(e.target.value);
                                                }} />
                                            </Form.Group>
                                        </Form.Row>
    
                                        <Form.Row>
                                            <Form.Group as={Col} sm={3} controlId="formGridEmail">
                                                <Form.Label>คณะ</Form.Label>
                                                <Form.Control type="email" readOnly placeholder="คณะ"
                                                value={Faculty}
                                                onChange={(e) => {
                                                    setFaculty(e.target.value);
                                                }} />
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={3} controlId="formGridEmail">
                                                <Form.Label>ภาควิชา/สาขาวิชา</Form.Label>
                                                <Form.Control type="email" readOnly placeholder="ภาควิชา/สาขาวิชา"
                                                value={Department}
                                                onChange={(e) => {
                                                    setDepartment(e.target.value);
                                                }} />
                                            </Form.Group>
    
    
                                            <Form.Group as={Col} sm={2} controlId="formGridState">
                                            <Form.Label>ระดับการศึกษา</Form.Label>
                                            <Form.Control as="select" readOnly defaultValue="Choose..."
                                            value={Educationlevel}
                                            onChange={(e) => {
                                                setEducationlevel(e.target.value);
                                            }}>
                                                <option>Choose...</option>
                                                <option>ปริญญาตรี</option>
                                                <option>ปริญญาโท</option>
                                                <option>ปริญญาเอก</option>
                                            </Form.Control>
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={2} controlId="formGridState">
                                            <Form.Label>หลักสูตร</Form.Label>
                                            <Form.Control as="select" readOnly defaultValue="Choose..."
                                            value={Course}
                                            onChange={(e) => {
                                                setCourse(e.target.value);
                                            }}>
                                                <option>Choose...</option>
                                                <option>ทั่วไป</option>
                                            </Form.Control>
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={2} controlId="formGridZip">
                                            <Form.Label>ชั้นปี</Form.Label>
                                            <Form.Control readOnly placeholder="ชั้นปี" 
                                            value={Level}
                                            onChange={(e) => {
                                                setLevel(e.target.value);
                                            }}/>
                                            </Form.Group>
                                        </Form.Row>
    
                                        <Form.Row>
                                            <Form.Group as={Col} sm={2} controlId="formGridState">
                                                <Form.Label>สภาพนักศึกษา</Form.Label>
                                                <Form.Control as="select" readOnly defaultValue="Choose..."
                                                value={Stauts}
                                                onChange={(e) => {
                                                    setStauts(e.target.value);
                                                }}>
                                                    <option>Choose...</option>
                                                    <option>active</option>
                                                </Form.Control>
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={2} controlId="formGridEmail">
                                                    <Form.Label>GPAX</Form.Label>
                                                    <Form.Control type="email" readOnly placeholder="GPAX"
                                                    value={Gpax}
                                                    onChange={(e) => {
                                                        setGpax(e.target.value);
                                                    }} />
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                    <Form.Label>เบอร์โทร</Form.Label>
                                                    <Form.Control type="email" readOnly placeholder="เบอร์โทร" 
                                                    value={Phone}
                                                    onChange={(e) => {
                                                        setPhone(e.target.value);
                                                    }}/>
                                            </Form.Group>
    
                                            <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" readOnly placeholder="Email"
                                                    value={Email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                    }} />
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
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="email" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
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
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                    </Form.Row>

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
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
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="email" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
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
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="email" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                    </Form.Row>

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="email" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                    </Form.Row> 

                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>รหัสวิชา</Form.Label>
                                                            <Form.Control type="email" placeholder="รหัสวิชา"
                                                            value={Course_code}
                                                            onChange={(e) => {
                                                                setCourse_code(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>กลุ่มที่</Form.Label>
                                                            <Form.Control type="กลุ่มที่" placeholder="กลุ่มที่"
                                                            value={Group_number}
                                                            onChange={(e) => {
                                                                setGroup_number(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} sm={4} controlId="formGridEmail">
                                                            <Form.Label>หน่วยกิต</Form.Label>
                                                            <Form.Control type="หน่วยกิต" placeholder="หน่วยกิต"
                                                            value={Credit}
                                                            onChange={(e) => {
                                                                setCredit(e.target.value);
                                                            }} />
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
                        <button className="btn-approve2" onClick={() => {createForm26()}} >ยืนยัน <img className="iconright" src={Form26logoright} alt="right"/></button> 
    
                    </div>
                </Container>
            </div>
        </div>
    )
}