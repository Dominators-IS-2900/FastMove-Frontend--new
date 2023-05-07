import React from "react";
import moment from 'moment'


export default function RouteBusTable({
    timeTableList,
  setSelected,
  deleteRecord,
}) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Time table </h6>
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
                <th>conductor name</th>
                <th>Start date time</th>
                <th>End date time</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {timeTableList?.map((record) => {
                const {
                  id,
                  busId,
                  user_name,
                  startDateTime,
                  endDateTime,
                } = record;
                return (
                  <tr key={id}>
                    <td>{busId}</td>
                    <td>{user_name}</td>
                    <td>{moment(startDateTime).format("YYYY-MM-DD hh:mm A")}</td>
                    <td>{moment(endDateTime).format("YYYY-MM-DD hh:mm A")}</td>
                    <th>
                      <button
                        type="button"
                        className="btn btn-primary ml-1"
                        onClick={() => {
                          setSelected({...record,
                            startDateTime:moment(startDateTime).format("YYYY-MM-DD HH:mm"),
                            endDateTime:moment(endDateTime).format("YYYY-MM-DD HH:mm")
                          });
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
