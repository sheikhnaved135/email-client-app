import React, { useEffect, useState } from "react";
import "./email.css";
import { ShimmerCategoryItems } from "shimmer-effects-react";
import EmailHome from "./EmailHome";
import EmailBody from "./EmailBody";

const Email = () => {
  const [email, setEmail] = useState([]);
  const [load, setLoad] = useState(false);
  const [openEmail, setOpenEmail] = useState(null);

  const getEmail = async () => {
    try {
      setLoad(true);
      const response = await fetch("https://flipkart-email-mock.vercel.app/");
      const data = await response.json();
      if (data) {
        const emailsWithStatus = data.list.map((item) => ({
          ...item,
          status: "unread",
          open: false,
        }));
        setEmail(emailsWithStatus);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getEmail();
  }, []);

  const handleStatusChange = (id) => {
    setEmail((prevEmail) =>
      prevEmail.map((item) => ({
        ...item,
        open: item.id === id ? !item.open : false,
        status: item.id === id ? "read" : item.status,
      }))
    );
    setOpenEmail(id);
  };

  return (
    <>
      {load ? (
        <ShimmerCategoryItems mode="light" items={10} />
      ) : (
        <>
          <header>
            <ul className="filter">
              <li className="">Filter By:</li>
              <li className="list">Unread</li>
              <li className="list">Read</li>
              <li className="list">Favorites</li>
            </ul>
          </header>
          <main className="email-container">
            <div
              className={`email-home-container ${
                openEmail ? "narrow" : "full-width"
              }`}
            >
              {email &&
                email.map((item) => {
                  const date = new Date(item.date).toLocaleDateString();
                  const time = new Date(item.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                  return (
                    <EmailHome
                      key={item.id}
                      item={item}
                      date={date}
                      time={time}
                      handleStatusChange={handleStatusChange}
                    />
                  );
                })}
            </div>
            {openEmail && (
              <div className="email-body-container">
                <EmailBody
                  email={email.find((item) => item.id === openEmail)}
                />
              </div>
            )}
          </main>
        </>
      )}
    </>
  );
};

export default Email;
