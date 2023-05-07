import React, { useEffect, useState } from "react";
import axios from "axios";
import DepoTable from "../../components/depoTable/DepoTable";
import TopBar from "../../components/topBar/TopBar";
import Footer from "../../components/footer/Footer";
import SaveDepo from "./saveDepo";

export default function DeposPage() {
  const [depoList, setDepoList] = useState([]);
  const [showSaveModel, setShowSaveModel] = useState(false);
  const [selectedDepo, setSelectedDepo] = useState(null);
  useEffect(() => {
    fetchDepos();
  }, []);

  const fetchDepos = async () => {
    axios.get("http://localhost:3000/depo").then(function (response) {
      setDepoList(response?.data);
    });
  };

  const modelStatus = (refresh = false) => {
    setSelectedDepo(null);
    setShowSaveModel(!showSaveModel);
    if (refresh) {
      fetchDepos();
    }
  };
  const setSelected = (data) => {
    console.log("Data",data)
    setSelectedDepo(data);
  };
  
  useEffect(()=>{
    if(selectedDepo){
      setShowSaveModel(true)
    }
  },[selectedDepo])

  const deleteDepo = (id)=>{
    let userConfirmation = window.confirm("Are you sure to delete the depo ? ")
    if(userConfirmation){
      axios
      .delete("http://localhost:3000/depo/"+id)
      .then(function (response) {
        if (response?.data?.status == "success") {
          alert("Depo deleted successfully");
          fetchDepos();
        }
      })
      .catch((e) => {
        alert("Depo delete failed");
      });
    }
  }
  return (
    <div id="content" className="content">
      <TopBar />

      <div className="container-fluid mr-5">
        <h1 className="h3 mb-2 text-gray-800">Depos Database</h1>
        <button
          type="button"
          className="btn btn-primary ml-1 mb-3"
          onClick={() => {
            setShowSaveModel(true);
          }}
        >
          ADD RECORD
        </button>
        <DepoTable
          setSelectedDepo={setSelected}
          modelStatus={modelStatus}
          depoList={depoList}
          deleteDepo={deleteDepo}
        />
      </div>
      <Footer />
      {showSaveModel && (
        <SaveDepo modelStatus={modelStatus} selectedDepo={selectedDepo} />
      )}
    </div>
  );
}
