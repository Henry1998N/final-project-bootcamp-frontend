import "./Step1.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ShowerIcon from "@mui/icons-material/Shower";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SummarizeIcon from "@mui/icons-material/Summarize";

const agendaFields = [
  { title: "Personal Plans", icon: <AccessibilityNewIcon /> },
  { title: "Classes", icon: <SelfImprovementIcon /> },
  { title: "Meals", icon: <DinnerDiningIcon /> },
  { title: "Showers", icon: <ShowerIcon /> },
  { title: "Additional Group Events", icon: <Diversity3Icon /> },
  { title: "General Summary", icon: <SummarizeIcon /> },
];

const Step1 = ({ apartementResidents }) => {
  return (
    <div className="container">
      <div className="residentsStatus">
        <h6>Personal Status</h6>
        {apartementResidents.map((resident) => (
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label={
                <div className={"status-details"}>
                  {" "}
                  <img src={resident.image} />
                  {resident.firstName + " " + resident.lastName}
                </div>
              }
              multiline
              maxRows={4}
            />
          </Box>
        ))}
      </div>

      <div className="agenda">
        <h6>Agenda</h6>
        {agendaFields.map((field) => (
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label={
                <div>
                  {" "}
                  {field.icon} {field.title}{" "}
                </div>
              }
              multiline
              maxRows={4}
            />
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Step1;
