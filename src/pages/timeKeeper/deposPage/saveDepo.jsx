import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import SaveModal from "../../../components/timeKeeper/model/model";

export default function SaveDepo({ modelStatus, selectedDepo }) {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [submitLoader, setSubmitLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (selectedDepo) {
      const { name, district, contact_number } = selectedDepo;
      setName(name);
      setDistrict(district);
      setContactNumber(contact_number);
    }
  }, []);
  const onSubmit = (data) => {
    setSubmitLoader(true);
    if (!selectedDepo) {
      axios
        .post("http://localhost:3000/depo", data)
        .then(function (response) {
          if (response?.data?.status == "success") {
            alert("Depo Saved Successfully");
            setSubmitLoader(false);
            modelStatus(true);
          }
        })
        .catch((e) => {
          alert("Depo Save Failed");
          setSubmitLoader(false);
        });
    } else {
      axios
        .put("http://localhost:3000/depo/" + selectedDepo?.id, {
          data,
        })
        .then(function (response) {
          if (response?.data?.status == "success") {
            alert("Depo Saved Successfully");
            setSubmitLoader(false);

            modelStatus(true);
          }
        })
        .catch((e) => {
          alert("Depo Save Failed");
          setSubmitLoader(false);
        });
    }
  };
  return (
    <SaveModal
      title={`Save depo`}
      buttonName="Save"
      modelStatus={modelStatus}
      onSubmit={handleSubmit(onSubmit)}
      submitLoader={submitLoader}
    >
      <div className="form-group">
        <input
          {...register("name", {
            required: true,
          })}
          type="text"
          className="form-control form-control-user"
          placeholder="Depo name"
        />
        {errors.name && <p style={{ color: "red" }}>Please enter depo name</p>}
      </div>
      <div className="form-group">
        <select
          {...register("district", {
            required: true,
          })}
          className="form-control form-control-user"
          placeholder="District"
        >
          <option value="">Select district</option>
          <option value="ampara">Ampara</option>
          <option value="anuradhapura">Anuradhapura</option>
          <option value="badulla">Badulla</option>
          <option value="batticaloa">Batticaloa</option>
          <option value="colombo">Colombo</option>
          <option value="galle">Galle</option>
          <option value="gampaha">Gampaha</option>
          <option value="hambantota">Hambantota</option>
          <option value="jaffna">Jaffna</option>
          <option value="kalutara">Kalutara</option>
          <option value="kandy">Kandy</option>
          <option value="kegalle">Kegalle</option>
          <option value="kilinochchi">Kilinochchi</option>
          <option value="kurunegala">Kurunegala</option>
          <option value="mannar">Mannar</option>
          <option value="matale">Matale</option>
          <option value="matara">Matara</option>
          <option value="monaragala">Monaragala</option>
          <option value="mullaitivu">Mullaitivu</option>
          <option value="nuwara eliya">Nuwara Eliya</option>
          <option value="polonnaruwa">Polonnaruwa</option>
          <option value="puttalam">Puttalam</option>
          <option value="ratnapura">Ratnapura</option>
          <option value="trincomalee">Trincomalee</option>
          <option value="vavuniya">Vavuniya</option>
        </select>
        {errors.district && (
          <p style={{ color: "red" }}>Please select district</p>
        )}
      </div>
      <div className="form-group">
        <input
          {...register("contactNumber", {
            required: true,
            minLength:10
          })}
          type="text"
          className="form-control form-control-user"
          placeholder="Contact number"
        />
        {errors.contactNumber && (
          <p style={{ color: "red" }}>Please enter valid contact number</p>
        )}
      </div>
    </SaveModal>
  );
}
