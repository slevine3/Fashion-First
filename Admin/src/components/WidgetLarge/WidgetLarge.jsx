import React from "react";
import "./WidgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1504755539389-NUA1FAUO2KA2VU4GLK43/professional-headshots-nyc-051.jpg?format=1000w"
              alt="headshot"
              className="widgetLargeImg"
            />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1504755539389-NUA1FAUO2KA2VU4GLK43/professional-headshots-nyc-051.jpg?format=1000w" alt="headshot" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1504755539389-NUA1FAUO2KA2VU4GLK43/professional-headshots-nyc-051.jpg?format=1000w" alt="headshot" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://images.squarespace-cdn.com/content/v1/53b599ebe4b08a2784696956/1504755539389-NUA1FAUO2KA2VU4GLK43/professional-headshots-nyc-051.jpg?format=1000w" alt="headshot" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
