import React from "react";
import "./email.css";

const EmailHome = ({ item, date, time, handleStatusChange }) => {
  return (
    <div
      className="main"
      key={item.id}
      onClick={() => handleStatusChange(item.id)}
      style={
        item.status === "read"
          ? { backgroundColor: "#F2F2F2" }
          : { backgroundColor: "#F4F5F9" }
      }
    >
      <div className="email-img">
        <p
          style={{
            backgroundColor: "#E54065",
            color: "white",
            fontWeight: "bold",
          }}
        >
          F
        </p>
      </div>
      <div className="content">
        <p className="text-item">From: {item.from.email}</p>
        <p className="text-item">Subject: {item.subject}</p>
        <p>{item.short_description}</p>
        <p className="text-item" style={{ margin: 0 }}>
          <span>{date}</span>
          <span>{time}</span>
        </p>
      </div>
    </div>
  );
};

export default EmailHome;
