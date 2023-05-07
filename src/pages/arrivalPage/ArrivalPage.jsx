import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../../components/topBar/TopBar";
import ArrivalTable from "../../components/arrivalTable/ArrivalTable";
import Footer from "../../components/footer/Footer";
import SaveArrival from "./saveArrival";

export default function ArrivalPage() {
  const [arrivalList, setArrivalList] = useState([]);
  const [showSaveModel, setShowSaveModel] = useState(false);
  const [selectedArrival, setSelectedArrival] = useState(null);
  useEffect(() => {
    fetchArrivals();
  }, []);

  const fetchArrivals = async () => {
    axios
      .get("http://localhost:3000/timekeeping/arrival")
      .then(function (response) {
        setArrivalList(response?.data);
      });
  };

  const modelStatus = (refresh = false) => {
    setSelectedArrival(null);
    setShowSaveModel(!showSaveModel);
    if (refresh) {
      fetchArrivals();
    }
  };
  const setSelected = (data) => {
    setSelectedArrival(data);
  };

  useEffect(() => {
    if (selectedArrival) {
      setShowSaveModel(true);
    }
  }, [selectedArrival]);

  const deleteArrival = (id) => {
    let userConfirmation = window.confirm(
      "Are you sure to delete the record ? "
    );
    if (userConfirmation) {
      axios
        .delete("http://localhost:3000/timekeeping/" + id)
        .then(function (response) {
          if (response?.data?.status == "success") {
            alert("Arrival deleted successfully");
            fetchArrivals();
          }
        })
        .catch((e) => {
          alert("Arrival delete failed");
        });
    }
  };
  return (
    <div id="content" className="content">
      <TopBar />

      <div className="container-fluid mr-5">
        <h1 className="h3 mb-2 text-gray-800">Bus Arrival Records</h1>
        <button
          type="button"
          className="btn btn-primary ml-1 mb-3"
          onClick={() => {
            setShowSaveModel(true);
          }}
        >
          ADD RECORD
        </button>
        <ArrivalTable
          setSelected={setSelected}
          modelStatus={modelStatus}
          arrivalList={arrivalList}
          deleteRecord={deleteArrival}
        />
      </div>
      <Footer />
      {showSaveModel && (
        <SaveArrival
          modelStatus={modelStatus}
          detail={selectedArrival}
        />
      )}
    </div>
  );
}
