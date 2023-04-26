import React, { useEffect, useState } from "react";
import ApartmenPagetHeader from "../ApartmentPageHeader/ApartmentPageHeader";
import "./ResidentsPage.css";
import ResidentsTable from '../ResidentsTable/ResidentsTable'
import ApiManager from "../../../apiManager/apiManager";
import { useParams } from "react-router-dom";

const Residents = ({}) => {
  const apiManager = new ApiManager();
  const {apartmentName} = useParams()
  const [residents, setResidents] = useState([]);
  const [apartment, setApartment] = useState({})

    useEffect(() => {
        const fetchApartment_ResidentsData = async() => {
            const apartmentsResidentsData = [
              apiManager.getApartmentByName(apartmentName),
              apiManager.getResidentsByApartmentName(apartmentName)
            ];
            
            try {
              const response = await Promise.all(apartmentsResidentsData)
              setApartment(response[0])
              setResidents(response[1])
            }
            catch (error) {
              console.log(error);
            }
        }
        fetchApartment_ResidentsData()
    }, [])

  try {
    return (
      <>
        <ApartmenPagetHeader apartment={apartment} residents={residents} />
        <ResidentsTable residents={residents} />
      </>
    );
  }
  catch (error) {
    console.log(error);
  }
};

export default Residents;
