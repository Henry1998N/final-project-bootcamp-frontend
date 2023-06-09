import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { logo } from "../../Assets/index";
import { useNavigate } from "react-router-dom";
import ApiManager from "../../apiManager/apiManager";
import "./SignIn.css";

function Copyright(props) {
  return (
    <footer className="signin-footer">
      {"Copyright © "}
      <Link color="inherit" href="#">
        CareCompanion+
      </Link>
      {new Date().getFullYear()}
      {"."}
    </footer>
  );
}

const theme = createTheme();

export default function SignIn({ setIsLoggedin, isLoggedin }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const apiManager = new ApiManager();
    const response = await apiManager.signIn(
      data.get("email"),
      data.get("password")
    );
    console.log(response);
    if (response) {
      localStorage.setItem("token", response.token);
      setIsLoggedin(JSON.stringify(localStorage.getItem("token")));
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: response.user.ref,
          userType: response.user.type,
        })
      );
      navigate(`/`);
    } else {
      alert("email or password no correct");
    }
  };

  useEffect(() => {
    if (isLoggedin) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="signin-container">
      <div className="signin-logo-container">
        <img src={logo} alt="" className="logo" />
      </div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="signin-title">Sign In</div>
            <Box
              component="form"
              onSubmit={handleSubmit}
              validate="true"
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
              {/* <GoogleLogin
              onSuccess={(res) => onGoogleLoginSuccess(res.credential)}
              onError={() => toast("Login Failed")}
            /> */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
