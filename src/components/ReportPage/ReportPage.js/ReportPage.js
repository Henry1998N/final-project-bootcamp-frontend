import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import "./ReportPage.css";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ApiManager from "../../../apiManager/apiManager";
import Utility from "../../../utilities/utility/util";
import Scroll_Paper_Dialog from "../../Helper-Components/Dialog/Scroll_Paper_Dialog";
import ReportDisplayPage from "../ReportDisplayPage/ReportDisplayPage";
import CoordinatorApiMan from "../../../coordinatorApiManager/coordinatorApiMan";
import LoadingWheel from "../../LoadingWheel/LoadingWheel";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#2e2e2e",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          },
        },
      },
    },
  },
});

export default function ReportPage() {
  const utility = new Utility();
  const navigate = useNavigate();
  const apiManager = new ApiManager();
  const coordinatorApiMan = new CoordinatorApiMan();
  const user = JSON.parse(localStorage.getItem("user"));
  const [reports, setReports] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewReport = () => {
    navigate("/apartments", { state: { location: "ReportPage" } });
  };

  useEffect(() => {
    const fetchReportsFromDb = async () => {
      let response;
      if (user.userType === "Instructor") {
        response = await apiManager.fetchReportsByInstructorId({instructorId: user?.userId});
        response = response.reports
      }
      else {
        response = await coordinatorApiMan.fetchReportsByCoordinatorId({coordinatorId: user?.userId});
        response = response.data
      }
      setReports(response);
      setLoading(false)
    };
    fetchReportsFromDb();
  }, []);

  const handleOpenDialog = (report) => {
    setSelectedReport(report);
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedReport(null);
    setIsOpen(false);
  };

  return (
    <div className="report-container">
      {loading ? <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}><LoadingWheel /></div> : null}
      <div className="report-page-header">
        <h1>Reports</h1>
        <ThemeProvider theme={theme}>
          <Button variant="contained" onClick={createNewReport}>
            Create New Report
          </Button>
        </ThemeProvider>
      </div>
      <TableContainer sx={{ width: 850 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Report Name</TableCell>
              <TableCell align="left">Apartment</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => (
              <TableRow
                key={report._id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0, width: 250 },
                }}
              >
                <TableCell
                  className="report-file-opener"
                  component="th"
                  scope="row"
                  onClick={() => handleOpenDialog(report)}
                >
                  {report.reportName}
                </TableCell>
                <TableCell align="left">{report.apartmentName}</TableCell>
                <TableCell align="left">
                  {utility.dateFormatter(report.date.slice(0, -1))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Scroll_Paper_Dialog
            open={isOpen}
            handleClose={handleCloseDialog}
            report={selectedReport}
            ComponentToRender={ReportDisplayPage}
            setIsOpen={setIsOpen}
          />
        </Table>
      </TableContainer>
    </div>
  );
}
