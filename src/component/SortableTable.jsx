import Table from "./Table";
import { useState } from "react";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          onClick={() => {
            handleClick(column.label);
          }}
        >
          {column.label} IS SOERTABLE
        </th>
      ),
    };
  });

  return (
    <div>
      {" "}
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} />
    </div>
  );
};

export default SortableTable;
