import "./OwnerDashboard.scss";
import "./OwnerDashboard.css"
import Widget from "../../../components/busOwner/ownerdashboard/widget/Widget";
import Featured from "../../../components/busOwner/ownerdashboard/featured/Featured";
import Chart from "../../../components/busOwner/ownerdashboard/chart/Chart";
import Table from "../../../components/busOwner/ownerdashboard/table/Table"

const OwnerDashboard = () => {
  return (
    <div className="home">
      
      <div className="homeContainer">
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        <div className="charts">
          <Featured />
          <Chart title="Last week revenue" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
