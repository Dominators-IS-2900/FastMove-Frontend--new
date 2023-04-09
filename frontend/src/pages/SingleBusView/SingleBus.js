import React from "react";
import styels from "./SingleBus.module.css";
import bus from "../../assets/logo.png";
import bus1 from "../../assets/bus1.jpg";
import logo1 from "../../assets/Icon 1.png";
import { Link } from "react-router-dom";
const SingleBus = () => {
  return (
    <div className={styels.container}>
      <div className={styels.sidebar_container}>
        <div className={styels.top_left}>
          <span className={styels.none}>&nbsp</span>
          <h1>Booking</h1>
        </div>

        <div className={styels.bus}>
          <img src={bus} />
        </div>
      </div>

      <div className={styels.div}>
        <div className={styels.logo1div}>
          <img src={logo1} />
        </div>
        <div className={styels.date}>
          <h1>2022-02-23</h1>
        </div>
        <div className={styels.bus2_container}></div>

        <div>
          <div className={styels.bus1_container}>
            <div>
              <img src={bus1} className={styels.samll_bus} />
            </div>
            <div className={styels.cards}>
              <div className={styels.card}>
                <h3>9.00 AM - 8.00 PM</h3>
                <h3>Seri Express</h3>
                <p>AC Sleeper</p>
                <div className={styels.price}>
                  <h3>$6.02</h3>
                </div>
              </div>
            </div>

            <div className={styels.card_table}>
              <div className={styels.table1}>
                {" "}
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>A</th>
                      <th>B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>
                        <div className={styels.sqaure}></div>
                      </td>
                      <td>
                        <td>
                          <div className={styels.sqaure}></div>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>
                        <div className={styels.sqaure}></div>
                      </td>
                      <td>
                        <td>
                          <div
                            className={`${styels.sqaure} ${styels.booked}`}
                          ></div>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>
                        <div
                          className={`${styels.sqaure} ${styels.booked}`}
                        ></div>
                      </td>
                      <td>
                        <td>
                          <div className={styels.sqaure}></div>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>
                        <div
                          className={`${styels.sqaure} ${styels.booked}`}
                        ></div>
                      </td>
                      <td>
                        <td>
                          <div className={styels.sqaure}></div>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>
                        <div className={styels.sqaure}></div>
                      </td>
                      <td>
                        <td>
                          <div className={styels.sqaure}></div>
                        </td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styels.table2}>
                {" "}
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>C</th>
                      <th>D</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>
                        <div className={styels.sqaure}></div>
                      </td>
                      <td>
                        {" "}
                        <td>
                          <div className={styels.sqaure}></div>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>
                        <div
                          className={`${styels.sqaure} ${styels.mybooked}`}
                        ></div>
                      </td>
                      <td>
                        {" "}
                        <td>
                          <div
                            className={`${styels.sqaure} ${styels.mybooked}`}
                          ></div>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>
                        <div className={styels.sqaure}></div>
                      </td>
                      <td>
                        {" "}
                        <td>
                          <div className={styels.sqaure}></div>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>
                        <div className={styels.sqaure}></div>
                      </td>
                      <td>
                        {" "}
                        <td>
                          <div className={styels.sqaure}></div>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>
                        <div className={styels.sqaure}></div>
                      </td>
                      <td>
                        {" "}
                        <td>
                          <div className={styels.sqaure}></div>
                        </td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styels.card_status}>
              <div className={styels.card_div}>
                <div className={styels.availabe1}></div>
                <h4>available seats</h4>
              </div>
              <div className={styels.card_div}>
                <div className={styels.availabe2}></div>
                <h4>booked seat</h4>
              </div>
              <div className={styels.card_div}>
                <div className={styels.availabe3}></div>
                <h4>your seat</h4>
              </div>
            </div>

            <div className={styels.actions}>
              <div>
                <Link to="payment">
                  <button className={styels.back} type="submit">
                    OK
                  </button>
                </Link>

                <Link to="bus-list">
                  <button className={styels.ok} type="submit">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBus;
