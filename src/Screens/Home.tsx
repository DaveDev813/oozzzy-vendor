import React, { ReactElement } from "react";
import TestStepper from "../components/Stepper";

const Home: React.FC = (): ReactElement => {
  return (
    <div>
      <h1>Home</h1>
      <TestStepper />
    </div>
  );
};

export default Home;
