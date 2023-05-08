import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../../../components/timeKeeper/topBar/TopBar";
import DepartureTable from "../../../components/timeKeeper/departureTable/DepartureTable";
import Footer from "../../../components/common/footer/Footer";
import SaveDeparture from "./saveDeparture";

export default function DeparturePage() {
  const [departureList, setDepartureList] = useState([]);
  const [showSaveModel, setShowSaveModel] = useState(false);
  const [selectedDeparture, setSelectedDeparture] = useState(null);
  useEffect(() => {
    fetchDepartures();
  }, []);

  const fetchDepartures = async () => {
    axios
      .get("http://localhost:3000/timekeeping/departure")
      .then(function (response) {
        setDepartureList(response?.data);
      });
  };

  const modelStatus = (refresh = false) => {
    setSelectedDeparture(null);
    setShowSaveModel(!showSaveModel);
    if (refresh) {
      fetchDepartures();
    }
  };
  const setSelected = (data) => {
    setSelectedDeparture(data);
  };

  useEffect(() => {
    if (selectedDeparture) {
      setShowSaveModel(true);
    }
  }, [selectedDeparture]);

  const deleteDeparture = (id) => {
    let userConfirmation = window.confirm(
      "Are you sure to delete the record ? "
    );
    if (userConfirmation) {
      axios
        .delete("http://localhost:3000/timekeeping/" + id)
        .then(function (response) {
          if (response?.data?.status == "success") {
            alert("Departure deleted successfully");
            fetchDepartures();
          }
        })
        .catch((e) => {
          alert("Departure delete failed");
        });
    }
  };
  return (
    <div id="content" className="content">
      <TopBar />

      <div className="container-fluid mr-5">
        <h1 className="h3 mb-2 text-gray-800">Bus Departure Records</h1>
        <button
          type="button"
          className="btn btn-primary ml-1 mb-3"
          onClick={() => {
            setShowSaveModel(true);
          }}
        >
          ADD RECORD
        </button>
        <DepartureTable
          setSelected={setSelected}
          modelStatus={modelStatus}
          departureList={departureList}
          deleteRecord={deleteDeparture}
        />
      </div>
      <Footer />
      {showSaveModel && (
        <SaveDeparture
          modelStatus={modelStatus}
          detail={selectedDeparture}
        />
      )}
    </div>
  );
}
