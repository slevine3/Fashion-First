import Chart from "../components/Chart";
import FeaturedInfo from "./FeaturedInfo";
import "./Home.css";
import { userData } from "../components/dummyData";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  );
};

export default Home;
