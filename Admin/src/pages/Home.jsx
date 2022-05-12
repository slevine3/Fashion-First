import Chart from "../components/Chart";
import FeaturedInfo from "./FeaturedInfo";
import "./Home.css";
import { userData } from "../components/dummyData";
import WidgetSmall from "../components/WidgetSmall";
import WidgetLarge from "../components/WidgetLarge";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;