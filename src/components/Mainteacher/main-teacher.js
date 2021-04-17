import React from 'react'
import './main-teacher.css'
import { FaChevronDown } from 'react-icons/fa';

function Mteacher() {
    
    return (
        <div className="top-text">
            <div className="top-x"><h2>คำร้องขอที่รอพิจารณา</h2></div>
            

            <div className="top-b">
                <button className="btn">วันที่ล่าสุด  <FaChevronDown /></button>
                <button className="btn">ประเภทคำร้อง  <FaChevronDown /></button>
                <button className="btn">เรียงตามชื่อ  <FaChevronDown /></button>
                <button className="btn">เรียงตามรหัส  <FaChevronDown /></button>
            </div>    

                <div className="top-box">
                    <div className="bx">02/02/64 Ro-01 คำร้องทั่วไป มาลี ศรีสุข 60090500446
                    <button className="btn-detail" onClick={() => {Mteacher()}}>ดูรายละเอียด</button>
                    </div>
                    
                </div>

                <div className="top-box">
                    <div className="bx">02/02/64 Ro-01 คำร้องทั่วไป มาลี ศรีสุข 60090500446
                    <button className="btn-detail" onClick={() => {Mteacher()}}>ดูรายละเอียด</button>
                    </div>
                    
                </div>
        </div>
        
    )
};


export default Mteacher;
