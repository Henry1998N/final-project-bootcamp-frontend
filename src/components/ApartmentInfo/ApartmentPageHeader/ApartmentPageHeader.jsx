import React, { useEffect, useState } from "react";
import "./ApartmentPageHeader.css";
import CDN from "../CDN";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ApiManager from "../../../apiManager/apiManager";
const FONT_AWESOME_CDN =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css";

const ApartmenPagetHeader = ({ apartment, residents }) => {
  const navigate = useNavigate()
  const createShiftReport = () => {
    navigate('/create-shift-report', {state: residents})
  }

  try {
    return (
      <div>
        <CDN href={FONT_AWESOME_CDN} />
        <div className="apartment-header-container">
          <img src={apartment.image} alt="" />
          <h1 className="apartment-name">
            {apartment.apartmentName}
            {/* <Link to={apartment.address.wazeLink} target="_blank">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </Link> */}
          </h1>
          <div className="apartment-info">
            <div className="info-item">
              <h5>City</h5>
              <p>{apartment.address ? apartment.address.split(", ")[1] : null}</p>
            </div>
            <div className="info-item">
              <h5>Street</h5>
              <p>{apartment.address ? apartment.address.split(", ")[0] + "." : null}</p>
            </div>
            <div className="info-item">
              <h5>People</h5>
              <p>{apartment.residents ? apartment.residents.length + " Residents" : null}</p>
            </div>
            <div className="info-item">
              <button onClick={createShiftReport}>Create Shift Report</button>
            </div>
          </div>
        </div>
      </div>
    );
  } 
  catch (error) {
    console.log(error);
  }
};

export default ApartmenPagetHeader;
