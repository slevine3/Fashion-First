import Chart from '../../components/Chart/Chart'
import FeaturedInfo from "../FeaturedInfo/FeaturedInfo";
import "./Home.css";
import WidgetSmall from "../../components/WidgetSmall/WidgetSmall";
import WidgetLarge from "../../components/WidgetLarge/WidgetLarge";
import React, { useEffect, useMemo, useState } from "react";
import { userRequest } from '../../requestMethods';

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
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
