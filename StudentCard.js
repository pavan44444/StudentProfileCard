import React from "react";
import './App.css'
function StudentCard({ name, age, course }) {
  return (
    <div style={{border:"1px solid gray", borderRadius:"10px", padding:"15px"}}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default StudentCard;
