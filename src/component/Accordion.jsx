import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.label} </div>
            <div>{item.content} </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
