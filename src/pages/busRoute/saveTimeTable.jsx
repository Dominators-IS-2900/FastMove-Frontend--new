import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import SaveModal from "../../components/model/model";

export default function SaveTimeTable({ modelStatus, detail, routeId }) {
  const [submitLoader, setSubmitLoader] = useState(false);
  const [busList, setBusList] = useState([]);
  const [conductorList, setConductorList] = useState([]);

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
      .get("http://localhost:3000/conductor")
      .then(function (response) {
        setConductorList(response?.data);
      })
      .then(() => {
        if (detail) {
            console.log(detail,"detaildetaildetaildetaildetaildetaildetaildetaildetail")
          reset(detail);
        }
      });
  };

  const onSubmit = (data) => {
    setSubmitLoader(true);
    if (!detail) {
      axios
        .post("http://localhost:3000/timetable/" + routeId, data)
        .then(function (response) {
          if (response?.data?.status == "success") {
            alert("Timetable Saved Successfully");
            setSubmitLoader(false);
            modelStatus(true);
          }
        })
        .catch((e) => {
          alert("Timetable Save Failed");
          setSubmitLoader(false);
        });
    } else {
      axios.put(
        "http://localhost:3000/timetable/" + detail?.id,data)
          .then(function (response) {
            if (response?.data?.status == "success") {
              alert("Timetable Saved Successfully");
              setSubmitLoader(false);

              modelStatus(true);
            }
          })
          .catch((e) => {
            alert("Timetable Save Failed");
            setSubmitLoader(false);
          })
    }
  };
  return (
    <SaveModal
      title={`Save Timetable`}
      buttonName="Save"
      modelStatus={modelStatus}
      onSubmit={handleSubmit(onSubmit)}
      submitLoader={submitLoader}
    >
      <div className="form-group">
        <select
          {...register("busId", {
            required: true,
          })}
          className="form-control"
        >
          <option value="">Select bus</option>
          {busList.map((bus) => {
            return <option value={bus?.Bus_No}>{bus.Bus_No}</option>;
          })}
        </select>
        {errors.busId && <p style={{ color: "red" }}>Please select bus</p>}
      </div>
      <div className="form-group">
        <select
          {...register("conductorId", {
            required: true,
          })}
          className="form-control"
        >
          <option value="">Select conductor</option>
          {conductorList.map((conductor) => {
            return (
              <option value={conductor?.conductorId}>
                {conductor.userName}
              </option>
            );
          })}
        </select>
        {errors.conductorId && (
          <p style={{ color: "red" }}>Please select conductor</p>
        )}
      </div>
      <div className="form-group">
        <input
          {...register("startDateTime", {
            required: true,
          })}
          type="datetime-local"
          className="form-control form-control-user"
          placeholder="Start date time"
        />
        {errors.startDateTime && (
          <p style={{ color: "red" }}>Please select start date time</p>
        )}
      </div>
      <div className="form-group">
        <input
          {...register("endDateTime", {
            required: true,
          })}
          type="datetime-local"
          className="form-control form-control-user"
          placeholder="End date time"
        />
        {errors.endDateTime && (
          <p style={{ color: "red" }}>Please select end date time</p>
        )}
      </div>
    </SaveModal>
  );
}
