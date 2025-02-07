import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../App";

const Flower = ({ nextPage }) => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    const sendEmail = async () => {
      try {
        const response = await fetch(
          "https://formsubmit.co/ajax/goylshubham@gmail.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: "The Valentine App",
              message: JSON.stringify(state),
            }),
          }
        );

        if (response.ok) {
          console.log("Email sent successfully.");
        } else {
          console.log("Failed to send email.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    sendEmail();
  }, []);

  return (
    <div className="flower-root">
      <div id="thankyou">
        <b>Thank you for being my girlfriend</b>
      </div>
      <div className="flower">
        <div className="f-wrapper">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
          </div>
        </div>

        <div className="f-wrapper f-wrapper--2">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
          </div>
        </div>

        <div className="f-wrapper f-wrapper--3">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
          </div>
        </div>
        <div className="flower__glass"></div>
      </div>
    </div>
  );
};

export default Flower;
