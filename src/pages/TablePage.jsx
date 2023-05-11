import React from "react";
import Table from "../component/Table";

const TablePage = () => {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 3,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 1,
    },
    {
      name: "Lime",
      color: "bg-green-500",
      score: 4,
    },
  ];

  const config = [{ label: "Fruits" }, { label: "Color" }, { label: "Score" }];

  return <Table data={data} config={config} />;
};

export default TablePage;
