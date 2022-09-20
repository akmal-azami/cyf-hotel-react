import React from "react";

import Bookings from "./Bookings";
import Heading from "./components/Heading";
import "./App.css";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Restaurant from "./Restaurant";

const arr = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const App = () => {
  return (
    <div className="App">
      <Heading />
      <img src="https://image.flaticon.com/icons/svg/139/139899.svg" alt="" />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer arr={arr} />
    </div>
  );
};

export default App;
