
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Check () {
    return (
        <div className="Check">
            <div className="container mt-5">
                <div className="form-header">ข้อมูลการจอง</div>
                <div className="form-container">
                    <form>
                        {/* Number of People */}
                        <div className="mb-3">
                            <label htmlFor="numPeople" className="form-label">จำนวนคน</label>
                            <input type="number" className="form-control" id="numPeople" placeholder="กรอกจำนวนคน" />
                        </div>

                        {/* Check-in and Check-out Dates */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">วันที่เข้าพัก</label>
                                <div className="d-flex">
                                    <input type="number" className="form-control me-2" placeholder="วัน" />
                                    <input type="number" className="form-control me-2" placeholder="เดือน" />
                                    <input type="number" className="form-control" placeholder="ปี" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">จนถึง</label>
                                <div className="d-flex">
                                    <input type="number" className="form-control me-2" placeholder="วัน" />
                                    <input type="number" className="form-control me-2" placeholder="เดือน" />
                                    <input type="number" className="form-control" placeholder="ปี" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-3">
                            <h5>ข้อมูลการติดต่อ</h5>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName" className="form-label">ชื่อ</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="ชื่อ" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName" className="form-label">นามสกุล</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="นามสกุล" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">อีเมล</label>
                                    <input type="email" className="form-control" id="email" placeholder="อีเมล" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone" className="form-label">เบอร์โทร</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="เบอร์โทร" />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-submit px-4 py-2">ยืนยันการจอง</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Check;
