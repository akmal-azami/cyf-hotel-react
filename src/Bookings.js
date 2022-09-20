import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import FakeBookings from "./data/fakeBookings.json";
import SearchResults from "./components/SearchResults.jsx";

const Bookings = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setData(data));

    console.log(data, "This is useEffect hook");
  }, []);

  function handleDelete(qqqq) {
    /*here in parameter we need to have access to the movie object/item  in array that is going to be deleted
  thus we have to pass the argument from it from the child component where we do handleDelete event
    */

    /* so now we have to create a new movies array that will include all the movies accept the movies that we have set as a parameter here */
    const newData = data.filter(zzz => qqqq !== zzz);
    setData(newData);
    console.log(data, "DATA TO DELETE");
  }

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults data={data} onRemove={handleDelete} />
      </div>
    </div>
  );
};

export default Bookings;
