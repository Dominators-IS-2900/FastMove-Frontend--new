import "./home.scss";
import Widget from "../../components/ownerdashboard/widget/Widget";
import Featured from "../../components/ownerdashboard/featured/Featured";
import Chart from "../../components/ownerdashboard/chart/Chart";
import Table from "../../components/ownerdashboard/table/Table";

const DashOwner = () => {
  return (
    <div className="home">
      
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default DashOwner;
