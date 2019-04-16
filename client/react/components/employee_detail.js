import React from "react";

const EmployeeDetail = ({ avatar, email, name, phone }) => {
  return (
    <div
      style={{ marginBottom: "20px" }}
      className="col-sm-12 col-md-4 col-lg-3 "
    >
      <img className="card-img-top" src={avatar} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{phone}</p>
        <a href="#" className="btn btn-primary btn-block">
          {email}
        </a>
      </div>
    </div>
  );
};

export default EmployeeDetail;
