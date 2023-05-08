import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import SaveModal from "../../../components/timeKeeper/model/model";

export default function SaveArrival({ modelStatus, detail }) {
  const [submitLoader, setSubmitLoader] = useState(false);
  const [busList, setBusList] = useState([]);
  const [routeList, setRouteList] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    axios
      .get("http://localhost:3000/bus")
      .then(function (response) {
        setBusList(response?.data);
      })
      .then(fetchRoutes());
  };
  const fetchRoutes = async () => {
    axios
      .get("http://localhost:3000/routes")
      .then(function (response) {
        setRouteList(response?.data);
      })
      .then(() => {
        if (detail) {
          reset(detail);
        }
      });
  };

  const onSubmit = (data) => {
    setSubmitLoader(true);
    if (!detail) {
      axios
        .post("http://localhost:3000/timekeeping/arrival", data)
        .then(function (response) {
          if (response?.data?.status == "success") {
            alert("Arrival Saved Successfully");
            setSubmitLoader(false);
            modelStatus(true);
          }
        })
        .catch((e) => {
          alert("Arrival Save Failed");
          setSubmitLoader(false);
        });
    } else {
      axios.put(
        "http://localhost:3000/timekeeping/arrival/" + detail?.id,
        data
          .then(function (response) {
            if (response?.data?.status == "success") {
              alert("Arrival Saved Successfully");
              setSubmitLoader(false);

              modelStatus(true);
            }
          })
          .catch((e) => {
            alert("Arrival Save Failed");
            setSubmitLoader(false);
          })
      );
    }
  };
  return (
    <SaveModal
      title={`Save Arrival`}
      buttonName="Save"
      modelStatus={modelStatus}
      onSubmit={handleSubmit(onSubmit)}
      submitLoader={submitLoader}
    >
      <div className="form-group">
        <select
          {...register("busNo", {
            required: true,
          })}
          className="form-control"
        >
          <option value="">
            Select bus
          </option>
          {busList.map((bus) => {
            return <option value={bus?.Bus_No}>{bus.Bus_No}</option>;
          })}
        </select>
        {
          errors.busNo && <p style={{color:'red'}}>Please select bus</p>
        }
      </div>
      <div className="form-group">
        <select
          {...register("routeId", {
            required: true,
          })}
          className="form-control"
        >
          <option value="">
            Select route
          </option>
          {routeList.map((route) => {
            return (
              <option value={route?.route_id}>
                {route.start_point} to {route.end_point}
              </option>
            );
          })}
        </select>
        {
          errors.routeId && <p style={{color:'red'}}>Please select route</p>
        }
      </div>
      <div className="form-group">
        <input
          {...register("arrivalDepartureDateTime", {
            required: true,
          })}
          type="datetime-local"
          className="form-control form-control-user"
          placeholder="Arrival date time"
        />
           {
          errors.arrivalDepartureDateTime && <p style={{color:'red'}}>Please select date and time</p>
        }
      </div>
    </SaveModal>
  );
}
