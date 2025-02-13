import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  const categories = ["น้ำซุป", "เนื้อ", "ผัก", "เครื่องดื่ม"];
  const items = Array(8).fill({ name: "ชื่อ", price: "฿XXX" });

  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-3">
        <a className="navbar-brand fw-bold" href="#">BUFFET บุฟเฟต์</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      {/* Title */}
      <div className="text-center py-3 bg-danger">
        <h2 className="fw-bold">รายการอาหาร</h2>
      </div>

      {/* Category Tabs */}
      <div className="d-flex justify-content-center bg-danger py-2">
        {categories.map((category, index) => (
          <button key={index} className="btn btn-outline-light mx-2">{category}</button>
        ))}
      </div>

      {/* Food Items */}
      <div className="container py-3">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card bg-danger text-white p-2">
                <div className="bg-white" style={{ height: "100px" }}></div> {/* Placeholder for Image */}
                <div className="text-center mt-2">
                  <h5>{item.name}</h5>
                  <p className="mb-1">{item.price}</p>
                  <button className="btn btn-sm btn-success">+ เพิ่ม</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary Box */}
      <div className="container pb-5">
        <div className="bg-danger p-3 rounded">
          <div className="bg-secondary" style={{ height: "200px" }}></div> {/* Placeholder for Summary */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
