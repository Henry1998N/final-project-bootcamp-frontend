import "./ApartmentsTable.css";
import "../../global-styles/datagrid-table-media-queries.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ApartmentsTable = ({ apartments }) => {
  const location = useLocation();
  const locationObject = location.state;
  const [rows, setRows] = useState([]);
  const userType = JSON.parse(localStorage.getItem("user"))?.userType;
  useEffect(() => {
    const filteredApartments = apartments.map((apartment) => {
      return {
        id: apartment.apartmentId ? apartment.apartmentId : apartment._id ,
        apartmentName: apartment.apartmentName,
        budget: `₪ ${
          apartment.budget > 999
            ? (apartment.budget / 1000).toFixed(1) + "k"
            : apartment.budget
        }`,
        address: apartment.address,
        img: apartment.image,
      };
    });
    setRows(filteredApartments);
  }, [apartments]);

  function handleDelete(id) {
    setRows(rows.filter((r) => r.id !== id));
  }

  const columnsTitles = [
    {
      field: "apartmentName",
      headerName: "Apartment Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cell-with-img">
            <img className="cell-img" src={params.row.img} alt="avatar" />
            {params.row.apartmentName}
          </div>
        );
      },
    },
    {
      field: "budget",
      headerName: "Budget",
      width: 100,
    },
    {
      field: "address",
      headerName: "Address",
      width: 260,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={
                locationObject?.location
                  ? `/reports/create-report/${params.row.apartmentName}`
                  : "/apartments/apartment-info/" + params.row.apartmentName
              }
              style={{ textDecoration: "none" }}
            >
              <button className="viewButton">View</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="datatable">
        <div className="data-grid-title">
          Apartments
          {userType === "Instructor" ? null : (
            <Link
              to="/apartments/apartment-info/apartment/new-apartment"
              className="new-apartment-link"
            >
              Add New Apartment
            </Link>
          )}
        </div>
        <DataGrid
          className="datagrid"
          rows={rows}
          getRowId={(row) => row.id}
          columns={columnsTitles}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default ApartmentsTable;
