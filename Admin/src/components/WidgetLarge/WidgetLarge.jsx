import React from "react";
import "./WidgetLarge.css";
import { useState, useEffect } from "react";
import { publicRequest, userRequest } from "../../requestMethods";
import { format } from "timeago.js";

const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersResponse = await publicRequest.get("/orders");
        setOrders(ordersResponse.data);

        const usersResponse = await publicRequest.get(`/users`);

        setUsers(usersResponse.data);
      } catch (error) {}
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tbody>
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh">
    
            </th>
            <th className="widgetLargeTh">Date</th>
            <th className="widgetLargeTh">Amount</th>
            <th className="widgetLargeTh">Status</th>
          </tr>
          {orders.map((order, i) => (
            <tr className="widgetLargeTr" key={i}>
              <td className="widgetLargeUser">
                <span className="widgetLargeName"></span>
              </td>
              <td className="widgetLargeDate">{format(order.createdAt)}</td>
              <td className="widgetLargeAmount">${order.amount}</td>
              <td className="widgetLargeStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLarge;
