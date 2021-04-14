import React from 'react'
import './main-teacher.css'

function Mteacher() {
    return (
        <div className="top-text">
            <h2>คำร้องขอที่รอพิจารณา</h2>
                <button className="btn">วันที่ล่าสุด</button>
                <button className="btn">ประเภทคำร้อง</button>
                <button className="btn">เรียงตามชื่อ</button>
                <button className="btn">เรียงตามรหัส</button>

                <div className="top-box">
                    <box className="bx">02/02/64 Ro-01 คำร้องทั่วไป มาลี ศรีสุข 60090500446</box>
                    <button className="btn-detail">ดูรายละเอียด</button>
                </div>
        </div>
    )
};

export default Mteacher;
