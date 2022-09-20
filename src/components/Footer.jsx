import React from "react";

const Footer = ({ arr }) => {
  console.log(arr);
  return (
    <div>
      <ul>
        {arr.map(address => {
          return <li>{address} </li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
