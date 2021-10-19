import React from "react";
import OrderItem from "./OrderItem";

export default function DriverColumnItem(props) {
  return (
    <div className="list-wrapper">
      <div className="list-header">Header</div>
      <div className="list-item">
        <OrderItem
          description={"Construction Material"}
          revenue={1000}
          cost={50}
        />
      </div>
    </div>
  );
}
