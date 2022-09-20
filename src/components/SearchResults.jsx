import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ data, onRemove }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">id</th> */}
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col"># of nights</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {data.map(dataItem => {
            return <Row dataItem={dataItem} onRemove={onRemove} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const Row = ({ dataItem, onRemove }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <tr
      key={dataItem.id}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      style={isClicked ? { backgroundColor: "blue", color: "white" } : {}}
    >
      <th scope="row">{dataItem.id}</th>
      {/* <td >{dataItem.title}</td> */}
      <td>{dataItem.firstName}</td>
      <td>{dataItem.email}</td>
      <td>{dataItem.roomId}</td>
      <td>{dataItem.checkInDate}</td>
      <td>{dataItem.checkOutDate}</td>
      <td>
        {moment(dataItem.checkOutDate).diff(
          moment(dataItem.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={
            () =>
              onRemove(
                dataItem
              ) /* in order to pass the arguments for deleting we need to  change from just onRemove/handleDelete to an arrow function with an agrument to list object/dataItem object*/
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SearchResults;
