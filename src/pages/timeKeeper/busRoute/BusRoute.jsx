import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import RouteBusTable from "../../../components/timeKeeper/routeBusTable/RouteBusTable";
import TopBar from "../../../components/timeKeeper/topBar/TopBar";
import Footer from "../../../components/common/footer/Footer";
import SaveTimeTable from "./saveTimeTable";

export default function TimeTable(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const routeName = queryParams.get("routeName");
  const routeId = queryParams.get("routeId");

  const [timeTableList, setTimeTableList] = useState([]);
  const [showSaveModel, setShowSaveModel] = useState(false);
  const [selectedTimeTable, setSelectedTimeTable] = useState(null);
  useEffect(() => {
    fetchTimeTables();
  }, []);

  const fetchTimeTables = async () => {
    axios
      .get("http://localhost:3000/timeTable/" + routeId)
      .then(function (response) {
        setTimeTableList(response?.data);
      });
  };

  const modelStatus = (refresh = false) => {
    setSelectedTimeTable(null);
    setShowSaveModel(!showSaveModel);
    if (refresh) {
      fetchTimeTables();
    }
  };
  const setSelected = (data) => {
    setSelectedTimeTable(data);
  };

  useEffect(() => {
    if (selectedTimeTable) {
      setShowSaveModel(true);
    }
  }, [selectedTimeTable]);

  const deleteTimeTable = (id) => {
    let userConfirmation = window.confirm(
      "Are you sure to delete the record ? "
    );
    if (userConfirmation) {
      axios
        .delete("http://localhost:3000/timetable/" + id)
        .then(function (response) {
          if (response?.data?.status == "success") {
            alert("TimeTable deleted successfully");
            fetchTimeTables();
          }
        })
        .catch((e) => {
          alert("Timetable delete failed");
        });
    }
  };

  return (
    <div id="content" className="content">
      <TopBar />

      <div className="container-fluid mr-5">
        <h1 className="h3 mb-2 text-gray-800">{routeName}</h1>
        <button
          type="button"
          className="btn btn-primary ml-1 mb-3"
          onClick={() => {
            setShowSaveModel(true);
          }}
        >
          ADD RECORD
        </button>
        <RouteBusTable
          setSelected={setSelected}
          modelStatus={modelStatus}
          timeTableList={timeTableList}
          deleteRecord={deleteTimeTable}
        />
      </div>
      <Footer />
      {showSaveModel && (
        <SaveTimeTable
          modelStatus={modelStatus}
          detail={selectedTimeTable}
          routeId={routeId}
        />
      )}
    </div>
  );
}
