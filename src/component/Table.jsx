import React from "react";

const Table = ({ data, config }) => {
  const renderdHedaers = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderRows = data.map((rowData, index) => {
    return (
      <tr className="border-b" key={index}>
        {config.map((column, index) => {
          return (
            <td className="p-2" key={column.label}>
              {column.render(rowData)}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderdHedaers}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
