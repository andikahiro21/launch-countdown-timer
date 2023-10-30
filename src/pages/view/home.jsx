import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/app.css";
import facebook from "/./icon-facebook.svg";
import instagram from "/./icon-instagram.svg";
import pinterest from "/./icon-pinterest.svg";
const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get("date");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdownOver, setCountdownOver] = useState(false);

  useEffect(() => {
    if (date) {
      const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDifference = new Date(date).getTime() - currentTime;

        if (timeDifference <= 0) {
          clearInterval(interval);
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
          setCountdownOver(true);
        } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [date]);
  return (
    <div className="container">
      {countdownOver ? (
        <div className="countdownOver">
          <h1>This game has been launched!!</h1>
        </div>
      ) : (
        <div className="mainPage">
          <div className="titlePage">
            <h1>WE'RE LAUNCHING SOON</h1>
          </div>
          <div className="cardCont">
            <div className="card">
              <div className="cardTimer">
                <h1>{days}</h1>
              </div>
              <div className="cardDesc">
                <h1>DAYS</h1>
              </div>
            </div>
            <div className="card">
              <div className="cardTimer">
                <h1>{hours}</h1>
              </div>
              <div className="cardDesc">
                <h1>HOURS</h1>
              </div>
            </div>
            <div className="card">
              <div className="cardTimer">
                <h1>{minutes}</h1>
              </div>
              <div className="cardDesc">
                <h1>MINUTES</h1>
              </div>
            </div>
            <div className="card">
              <div className="cardTimer">
                <h1>{seconds}</h1>
              </div>
              <div className="cardDesc">
                <h1>SECONDS</h1>
              </div>
            </div>
          </div>
          <div className="socialMedia">
            <div className="facebook">
              <img src={facebook} alt="" />
            </div>
            <div className="pinterest">
              <img src={pinterest} alt="" />
            </div>
            <div className="instagram">
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
