import React from 'react'
import './last-teacher.css'

function lassteacher2(prop) {
    const Type = prop.match.params.type
    return (
        <div className="lg-total">
                <div className="lg-green">
                    <div className="cenlg">
                    <div className="lg-text">
                        <h2>ท่านได้ทำการตอบรับเอกสาร :</h2>
                        <h2>ใบลงทะเบียนเพิ่ม-ลด-ถอน-เปลี่ยนกลุ่ม-เปลี่ยนรายวิชา</h2>
                        <h2>{ Type }</h2>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default lassteacher2
