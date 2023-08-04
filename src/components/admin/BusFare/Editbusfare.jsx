import axios from "axios";
import "./BusFare.css";
import React, { useEffect, useState } from "react";
import { Params, useLocation, useNavigate, useParams } from "react-router-dom";

const Editbusfare = () => {
  const { id } = useParams();
  const { Bus_type } = useParams();
  const [min, setmin] = useState(0);
  const [inc, setinc] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/update/" + id)
      .then((res) => {
        setmin(res.data[0].minimum_prize);
        setinc(res.data[0].increment);
        console.log(res.data[0].Bus_type);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/updated/" + id, { min, inc }).then((res) => {
      if (res.data.updated) {
        navigate("/busfare");
      } else {
        alert("not updated");
      }
    });
  };

  return (
    <div>
      {id}
      <br />
      {Bus_type}

      <form onSubmit={handlesubmit}>
        <label className="min">Minimum Fare</label>
        <input type="number" className="min" value={min} onChange={(e) => setmin(e.target.value)} />
        <label className="increment">Increment Fare</label>
        <input type="number" className="increment" value={inc} onChange={(e) => setinc(e.target.value)} />
        <button type="submit" className="update-button">Update</button>
      </form>
    </div>
  );
};

export default Editbusfare;

