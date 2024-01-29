import React, { useState } from "react";
import Calendar from 'react-calendar';
import "./index.css"; // Importez votre fichier CSS

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="float-bloc">
      <div className="greet">
        <div className="title">Calendar</div>
        <div className="subtitle">Consultez votre calendrier</div>
      </div>
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
};

export default MyCalendar;
