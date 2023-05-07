import React from "react";

export default function DepoTable({ depoList, setSelectedDepo, modelStatus, deleteDepo }) {
  console.log(depoList);
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Bus Depo Details </h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Depo Name</th>
                <th>District</th>
                <th>Contact Number</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {depoList?.map((depo) => {
                const { id,name, district, contact_number } = depo;
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{district}</td>
                    <td>{contact_number}</td>
                    <th>
                      <button
                        type="button"
                        className="btn btn-primary ml-1"
                        onClick={() => {
                          console.log(depo)
                          setSelectedDepo(depo);
                          // modelStatus(true);
                        }}
                      >
                        Update
                      </button>
                      <button type="button" className="btn btn-warning ml-1" onClick={()=>{
                        deleteDepo(id)
                      }}>
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
