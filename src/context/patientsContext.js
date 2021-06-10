import { createContext, useState } from "react";

export const patientsContext = createContext();

const PatientsProvider = ({ children, data }) => {
  const [patients, setPatients] = useState(data);

  return (
    <patientsContext.Provider value={{ patients, setPatients }}>
      {children}
    </patientsContext.Provider>
  );
};

export default PatientsProvider;
