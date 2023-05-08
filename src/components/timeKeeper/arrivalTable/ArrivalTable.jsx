import React from "react";
import moment from 'moment'

export default function ArrivalTable({
  arrivalList,
  setSelected,
  deleteRecord,
}) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Arrival Details </h6>
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
                <th>Bus No</th>
                <th>Route</th>
                <th>Arrival date time</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {arrivalList?.map((record) => {
                const {
                  id,
                  routeId,
                  busNo,
                  start_point,
                  end_point,
                  arrivalDepartureDateTime,
                } = record;
                return (
                  <tr key={id}>
                    <td>{busNo}</td>
                    <td>
                      {start_point} to {end_point}
                    </td>
                    <td>{moment(arrivalDepartureDateTime).utc().format("YYYY-MM-DD HH:mm")}</td>
                    <th>
                      <button
                        type="button"
                        className="btn btn-primary ml-1"
                        onClick={() => {
                          setSelected(record);
                        }}
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning ml-1"
                        onClick={() => {
                          deleteRecord(id);
                        }}
                      >
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
