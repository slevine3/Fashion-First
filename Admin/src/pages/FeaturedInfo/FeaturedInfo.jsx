import React, { useEffect, useState } from "react";
import "./FeaturedInfo.css";

import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const response = await userRequest.get("/orders/income");
        setIncome(response.data);
        setPercentage(
          (response.data[1].total * 100) / response.data[0].total - 100
        );
      } catch (error) {}
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${`${income[1]?.total}`}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(percentage)}{" "}
            {percentage < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
