import "./ResidentInfoPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import ResidentDetails from "../ResidentDetails/ResidentDetails";
import MedicalAppointment from "../Medical Appointments/MedicalAppointment";
import Image from "../Image/Image";
import RelativeContacts from "../Relative Contacts/RelativeContacts";

export default function ResidentInfoPage() {
  const { residentId } = useParams();
  const [resident, setResident] = useState([]);

  useEffect(() => {
    const apiManger = new ApiManager();

    const getResident = async () => {
      let tempResident = await apiManger.getResidentById(residentId);
      setResident(tempResident[0]);
    };
    getResident();
  }, []);

  return (
    <div className="resident-card-container">
      <div className="resident-card">
        <Image imageSrc={resident.image} />
        <ResidentDetails resident={resident} />
      </div>
      <div className="resident-medical-appointments-container">
        <MedicalAppointment residentId={residentId} />
        <RelativeContacts residentId={residentId} />
      </div>
    </div>
  )
}