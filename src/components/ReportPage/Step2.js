import "./Step2.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";

const Step2 = ({ apartementResidents }) => {
  const step2Fields = [
    { title: "Laundry", icon: <LocalLaundryServiceIcon /> },
    { title: "Shopping", icon: <ShoppingCartIcon /> },
    { title: "Families", icon: <Diversity2Icon /> },
    { title: "Exceptional Event", icon: <SmsFailedIcon /> },
  ];

  return (
    <div className="container">
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <h6>General Activities</h6>
        {step2Fields.map((field) => (
          <TextField
            id="outlined-multiline-flexible"
            label={
              <div>
                {" "}
                {field.icon} {field.title}
              </div>
            }
            multiline
            maxRows={4}
          />
        ))}
      </Box>

      <FormGroup>
        <h6>General Cleaning</h6>
        <FormControlLabel control={<Checkbox />} label="Refrigerator test" />
        <FormControlLabel
          control={<Checkbox />}
          label="Cleaning toilets and showers"
        />
        <FormControlLabel control={<Checkbox />} label="empty bin" />
        <FormControlLabel
          control={<Checkbox />}
          label="Arranging closets and rooms"
        />
      </FormGroup>

      <FormGroup>
        <h6>Daily Treatment</h6>
        <FormControlLabel control={<Checkbox />} label="drugs giving" />
        <FormControlLabel control={<Checkbox />} label="Applying foot cream" />
        <FormControlLabel control={<Checkbox />} label="teeth brushing" />
        <FormControlLabel
          control={<Checkbox />}
          label="Glasses cleaning (for glasses wearers)"
        />
      </FormGroup>

      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <h6>Counting Money</h6>
        <TextField
          label={"Appartment Budget"}
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">₪</InputAdornment>,
          }}
        />
        {apartementResidents.map((resident) => (
          <TextField
            label={resident.firstName + " " + resident.lastName + " Budget"}
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₪</InputAdornment>
              ),
            }}
          />
        ))}
      </Box>
    </div>
  );
};

export default Step2;
