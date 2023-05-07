import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TopBar from "../../components/topBar/TopBar";
import Footer from "../../components/footer/Footer";

export default function ProfilePage() {
  const [submitLoader, setSubmitLoader] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    axios.post("http://localhost:3000/profile",{
        userId:localStorage.getItem("userId")
    }).then(function (response) {
      reset({...response.data.user,password:''});
    });
  };

  const onSubmit = (data) => {
    setSubmitLoader(true);
    axios
      .put("http://localhost:3000/profile/save/" + localStorage.getItem("userId"),data)
      .then(function (response) {
        if (response?.data?.status == "success") {
          alert("Profile Saved Successfully");
          setSubmitLoader(false);
          fetchProfile()
        }
      })
      .catch((e) => {
        alert("Profile Save Failed");
        setSubmitLoader(false);
      });
  };
  return (
    <div id="content" className="content">
      <TopBar />
      <div className="modal-body">
        <div className="container-fluid mr-5">
          <h1 className="h3 mb-2 text-gray-800">Profile</h1>
        </div>
        <div className="form-group">
          <input
            {...register("name", {
              required: true,
            })}
            disabled
            type="text"
            className="form-control form-control-user"
            placeholder="User name"
          />
          {errors.name && (
            <p style={{ color: "red" }}>Please enter user name</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register("email", {
              required: true,
            })}
            disabled
            type="text"
            className="form-control form-control-user"
            placeholder="Email address"
          />
          {errors.email && (
            <p style={{ color: "red" }}>Please enter email address</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            type="text"
            className="form-control form-control-user"
            placeholder="Password"
          />
          {errors.password && (
            <p style={{ color: "red" }}>Please enter password</p>
          )}
        </div>
        {!submitLoader && (
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </button>
        )}
        {submitLoader && (
          <button disabled className="btn btn-primary btn-block">
            <i className="fa fa-spinner fa-spin" />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}
