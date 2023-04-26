import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  return (
    <div>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div key={index}>
            <div>{item.label} </div>
            {isExpanded && <div>{item.content} </div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
