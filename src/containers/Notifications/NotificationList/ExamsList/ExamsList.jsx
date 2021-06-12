import React from "react";

export default function ExamsList({ exams }) {
  return (
    exams && (
      <div>
        <h1>Exames do paciente</h1>
        <ol>
          {exams.map((exam) => (
            <li>{exam.refObservations}</li>
          ))}
        </ol>
      </div>
    )
  );
}
