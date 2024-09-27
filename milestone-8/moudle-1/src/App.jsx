import React from "react";
import NavBar from "./components/nav-bar/NavBar";
import PriceOptions from "./components/price-options/PriceOptions";
import LineChart from "./components/react-chart/LineChart";
// import DaisyNav from "./components/daisynav/DaisyNav";

const App = () => {
  return (
    <div>
      {/* <DaisyNav></DaisyNav> */}
      {/* <NavBar></NavBar>
      <PriceOptions></PriceOptions> */}
      <LineChart></LineChart>
    </div>
  );
};

export default App;
