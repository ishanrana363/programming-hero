import React from "react";
import NavBar from "./components/nav-bar/NavBar";
import PriceOptions from "./components/price-options/PriceOptions";
import LineChart from "./components/react-chart/LineChart";
import PhoneChart from "./components/phone/PhoneChart";
// import DaisyNav from "./components/daisynav/DaisyNav";

const App = () => {
  return (
    <div>
      {/* <DaisyNav></DaisyNav> */}
      {/* <NavBar></NavBar>
      <PriceOptions></PriceOptions> */}
      {/* <LineChart></LineChart> */}
      <PhoneChart></PhoneChart>
    </div>
  );
};

export default App;
