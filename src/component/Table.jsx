import React from "react";

const Table = ({ data }) => {
  const renderRows = data.map((fruit) => {
    return (
      <tr>
        <td>{fruit.name}</td>
        <td>{fruit.color}</td>
        <td>{fruit.score}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Fruits</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
