import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { countries } from "../data";
const Dashboard = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log('userData:  ', userData);
   
  return (
    <div>

<div className="dashboardHeader">
    <h1>hi {userData.username}, Welcome to dashboard</h1>
    <p>Please find user details below</p>
<Link to="/">Sign Out</Link>
</div>

      <div className="dashboardWrapper">
        <div className="datarow">
          <h1>Full Name</h1>
          <p>{userData.full_name}</p>
        </div>

        <div className="datarow">
          <h1>User Name</h1>
          <p>{userData.username}</p>
        </div>

        <div className="datarow">
          <h1>Country</h1>
          <p>{countries[userData.country_row_id]}</p>
        </div>

        <div className="datarow">
          <h1>Mobile Number</h1>
          <p>{userData.mobile_number}</p>
        </div>

        <div className="datarow">
          <h1>E-Mail Address</h1>
          <p>{userData.email_id}</p>
        </div>

        <div className="datarow">
          <h1>Refral ID</h1>
          <p>{userData.referral_row_id}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
