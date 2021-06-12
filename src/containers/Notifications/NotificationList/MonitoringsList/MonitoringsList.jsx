import React from "react";

export default function MonitoringsList({ monitorings }) {
  return (
    monitorings && (
      <div>
        <h1>Exames do paciente</h1>
        <ol>
          {monitorings.map((exam) => (
            <li>{exam.observations}</li>
          ))}
        </ol>
      </div>
    )
  );
}
