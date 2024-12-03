import React from "react";

const EmailBody = ({ email }) => {
  console.log(email);
  return (
    <div className="email-body">
      <h1>{email.from.email}</h1>
    </div>
  );
};

export default EmailBody;
