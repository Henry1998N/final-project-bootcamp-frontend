import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CoordinatorApiMan from "../../../../coordinatorApiManager/coordinatorApiMan";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Snackbar_Top_Right from "../../../Helper-Components/Snackbar/Snackbar_Top_Right";

export default function InstructorDialog({
  open,
  handleClose,
  coordinatorId,
  fetchInstructors,
}) {
  //   const useStyles = makeStyles((theme) => ({
  //     form: {
  //       display: "flex",
  //       flexDirection: "column",
  //     },
  //     submitButton: {
  //       marginTop: theme.spacing(2),
  //     },
  //   }));

  //   const classes = useStyles();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const instructorIdRegex = /^\d{9}$/;
  const signatureRegex = /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[a-z]).{5,}$/;
  const phoneNumberRegex = /^05[0-8]\d{7}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d.*\d)[A-Za-z\d]{6,}$/;
  const nameRegex = /^.{3,}$/; // name must be at least 3 characters

  const errors = {
    email: "Please enter a valid email address",
    instructorId: "Instructor ID must be 9 digits",
    signature:
      "Signature must contain at least one uppercase letter, two digits, and be at least 5 characters long",
    phoneNumber: "Phone number must be 10 digits and start with 05",
    password: "Password must be at least 6 characters with at least 2 digits",
    name: "Name must be at least 3 characters",
  };
  const [formData, setFormData] = useState({
    instructorId: "",
    name: "",
    signature: "",
    email: "",
    phoneNumber: "",
    password: "",
    image: "",
  });

  const [validationErrors, setValidationErrors] = React.useState({});
  const [snackbarProps, setSnackbarProps] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateFormData = () => {
    let validationErrors = {};
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = errors.email;
    }
    if (!instructorIdRegex.test(formData.instructorId)) {
      validationErrors.instructorId = errors.instructorId;
    }
    if (!signatureRegex.test(formData.signature)) {
      validationErrors.signature = errors.signature;
    }
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = errors.phoneNumber;
    }
    if (!passwordRegex.test(formData.password)) {
      validationErrors.password = errors.password;
    }
    if (!nameRegex.test(formData.name)) {
      validationErrors.name = errors.name;
    }
    setValidationErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const apiManager = new CoordinatorApiMan();
    const isValid = validateFormData();
    if (isValid) {
      setSnackbarProps({ message: "Instructor has been added!", severity: "success" });
      await apiManager.addNewInstructorToCoordinator(coordinatorId, formData);
      fetchInstructors();
      handleClose();
    } else {
      setSnackbarProps({ message: "Something went wrong!", severity: "error" });
    }
  };

  useEffect(() => {
    if (snackbarProps) {
      const timer = setTimeout(() => {
        setSnackbarProps("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [snackbarProps]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Instructor</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            required
            fullWidth
            margin="normal"
            name="instructorId"
            label="Instructor ID"
            value={formData.instructorId}
            error={Boolean(validationErrors.instructorId)}
            helperText={validationErrors.instructorId}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="name"
            label="Name"
            value={formData.name}
            error={Boolean(validationErrors.name)}
            helperText={validationErrors.name}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="signature"
            label="Signature"
            value={formData.signature}
            error={Boolean(validationErrors.signature)}
            helperText={validationErrors.signature}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="email"
            label="Email"
            value={formData.email}
            error={Boolean(validationErrors.email)}
            helperText={validationErrors.email}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            error={Boolean(validationErrors.phoneNumber)}
            helperText={validationErrors.phoneNumber}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            error={Boolean(validationErrors.password)}
            helperText={validationErrors.password}
            onChange={handleInputChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="image"
            label="Image URL"
            value={formData.image}
            onChange={handleInputChange}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleFormSubmit}>Add</Button>
      </DialogActions>
      {snackbarProps && <Snackbar_Top_Right props={snackbarProps} />}
    </Dialog>
  );
}
