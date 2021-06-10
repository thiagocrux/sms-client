import React from "react";
import Header from "./components/Layout/Header/Header";
import Section from "./components/Layout/Section/Section";
import Routes from "./routes/Routes";

export default function App() {
  // const [patients, setPatients] = useState();
  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/v1/patients/").then((response) => {
  //     setPatients(response.data.patients);
  //   });
  // }, []);

  return (
    <>
      <Header />
      <Section>
        <Routes />
      </Section>
    </>
  );
}
