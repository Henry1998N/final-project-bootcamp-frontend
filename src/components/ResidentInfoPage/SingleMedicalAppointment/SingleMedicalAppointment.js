import "../MedicalAppointments/MedicalAppointments.css";
import React, { useState } from "react";
import Utility from "../../../utilities/utility/util";
import DatePickerField from "../DatePicker/DatePicker";
import TextField from "@mui/material/TextField";
import TimePicker from "../TimePicker/TimePicker";
import Box from "@mui/material/Box";
import ApiManager from "../../../apiManager/apiManager";

export default function SingleMedicalAppointment({ ma,handleAttendClick }) {
  const utility = new Utility();
  const apiManager = new ApiManager()

  const [isInputFieldsDisabled, setInputFieldsDisabled] = useState(true);
  const [medicalAppointment, setMedicalAppointments] = useState(ma)
  const [editSaveButton, setEditSaveButton] = useState("Edit")
  const [date, setDate] = useState(utility.dateFormatter(medicalAppointment.date));
  const [time, setTime] = useState(utility.timeFormatter(medicalAppointment.time));
  const [inspection, setInspection] = useState(medicalAppointment.typeOfInspection)

  const upDateAppointment = async(id, object) => {
    let response = await apiManager.editMedicalAppointment(id, object)
    setMedicalAppointments(response.data)
    return response
  }

  const handleTimeChange = (newTime) => {
    setTime(utility.timeFormatter(newTime.$d));
  };

  const handleDateChange = (newDate) => {
    setDate(utility.dateFormatter(newDate.$d));
  };

  const handleAppointmentEdit = () => {
    if (editSaveButton === "Edit") {
      setEditSaveButton("Save")
      setInputFieldsDisabled(false)
    }
    if (editSaveButton === "Save") {
      try {
        let editedAppointment = {}
        editedAppointment.date = utility.convertToIsoDateFormat(`${date} ${time}`)
        editedAppointment.typeOfInspection = inspection
        upDateAppointment(ma._id, editedAppointment)
        setInputFieldsDisabled(true)
        setEditSaveButton("Edit")
      }
      catch (error) {
        console.log(error);
      }
      
    }
  };

  return (
    <tr>
      {isInputFieldsDisabled ? (
        <td>
          {ma.typeOfInspection}
        </td>
      ) : (
        <td>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              disabled={isInputFieldsDisabled}
              id="outlined-basic"
              value={inspection}
              onChange={(event) => setInspection(event.target.value)}
              variant="outlined"
            />
          </Box>
        </td>
      )}
      {isInputFieldsDisabled ? (
        <td>
          {date}
        </td>
      ) : (
        <td>
          <DatePickerField
            defaultDate={utility.dateFormatter(medicalAppointment.date)}
            handleDateChange={handleDateChange}
          />
        </td>
      )}
      {isInputFieldsDisabled ? (
        <td>
          {utility.timeFormatter(medicalAppointment.date)}
        </td>
      ) : (
        <td>
          <TimePicker
            defaultTime={medicalAppointment.date}
            handleTimeChange={handleTimeChange}
          />
        </td>
      )}

      <td>
        <span className={`status ${medicalAppointment.attended ? "green" : "red"}`}></span>
        {medicalAppointment.attended ? "Attended" : "Not Attended"}
      </td>
      <td>
        <button
          className="action-btn edit"
          onClick={handleAppointmentEdit}>
          {editSaveButton}
        </button>
        <button className="action-btn delete">Delete</button>
        {!ma.attended ?  <button className="action-btn " onClick={event =>handleAttendClick(ma)}>Attend</button>:<div></div>}

      </td>
    </tr>
  );
}
