import Table from "./Table";
import { useState } from "react";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      setSortOrder(null);
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

  return <Table {...props} config={updatedConfig} />;
};

export default SortableTable;
