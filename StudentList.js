import React from "react";
import StudentCard from "./StudentCard";

const students = [
  { id: 1, name: "john", age: 21, course: "React" },
  { id: 2, name: "bhargav", age: 20, course: "Node.js" },
  { id: 3, name: "Kiran", age: 22, course: "MongoDB" },
  {id:4, name: "pavan", age:22, course:"DBMS"}
];

function StudentList() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}
    </div>
  );
}

export default StudentList;
