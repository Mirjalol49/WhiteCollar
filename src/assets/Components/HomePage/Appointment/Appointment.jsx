/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Planning from "./Planning/Planning";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../../Generics/Button/Button";
import "./Appointment.css";
const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  return (
    <section className="appoint">
      <div className="container">
        <div className="appoint-wrapper">
          <div className="appoint-start">
            <p className="appoint-start__subtitle">How we work</p>
            <h2 className="appoint-start__title">
              To Get Your Business To The Next Level
            </h2>
            <p className="appoint-start__text">
              Leverage agile frameworks to provide synopsis for high level
              overviews.Iterative approaches to corporate strategy foster
              collaborative thinking to further the overal.
            </p>
            <div className="appoint-exp-box">
              <div className="appoint-exp__round">
                <div className="appoint-round">562+</div>
                <div className="appoint-round-txt">Projects</div>
              </div>
              <p className="appoint-exp__text">
                We have 50+ years of experience. We offer whitecollar services
                to you
              </p>
            </div>
            <Planning
              title="Planning"
              context="Leverage agile frameworks to provide synopsis for high level overviews."
            />
            <Planning
              title="Briefing"
              context="Leverage agile frameworks to provide synopsis for high level  approaches "
            />
            <Planning
              title="Evaluation"
              context="Leverage agile frameworks to provide synopsis for high level overviews Iterative."
            />
          </div>
          <div className="appoint-end">
            <p className="appoint-start__subtitle">Book now</p>
            <h3 className="appoint-start__title">
              Get Free Business Free Appointment
            </h3>
            <form className="appoint-form" typeof="POST">
              <input
                className="appoint-input"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                className="appoint-input"
                type="email"
                placeholder="Email Adress"
                required
              />
              <input
                className="appoint-input"
                type="number"
                placeholder="Phone Number"
              />
              <div className="appoint-daypicker-box">
                <DatePicker
                  className="date-picker"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  isClearable
                  placeholderText="Date"
                />
                <DatePicker
                  className="date-picker"
                  selected={selectedTime}
                  onChange={(date) => setSelectedTime(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  dateFormat="h:mm aa"
                  placeholderText="Time"
                />
              </div>

              <textarea
                className="appoint-input"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Service Description"
              ></textarea>
              <Button width={180} color="#37393F" backgroundColor="#40DDB6">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
