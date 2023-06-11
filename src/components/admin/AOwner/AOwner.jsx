import { useState } from "react";
import './AOwner.css'

export default function Owner() {
  const [nicImages, setNicImages] = useState([]);

  const handleImageUpload = (event, rowIndex) => {
    const file = event.target.files[0];
    const updatedImages = [...nicImages];
    updatedImages[rowIndex] = URL.createObjectURL(file);
    setNicImages(updatedImages);
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>User_ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Contact No</th>
                <th>Account No</th>
                <th>NIC</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>desilva@gmail.com</td>
                <td>sajini</td>
                <td>0704563456</td>
                <td>2989783456</td>
                <td>
                  {nicImages[0] ? (
                    <img src={nicImages[0]} alt="NIC Scan Copy" style={{ width: "100px", height: "auto" }} />
                  ) : (
                    "No image uploaded"
                  )}
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 0)} />
                </td>
                <td>
                  <div className="Button">
                    <button className="btn btn-primary equal-width">Verify</button>
                  </div>
                  <span style={{ margin: "0 5px" }}></span>
                  <div className="Button">
                    <button className="btn btn-danger equal-width">Cancel</button>
                  </div>
                </td>
              </tr>
              {/* Rest of the rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

