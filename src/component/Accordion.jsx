import React, { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div key={index}>
            <div
              className="flex gap-1"
              onClick={() => {
                setExpandedIndex(index);
              }}
            >
              {item.label}{" "}
              {isExpanded ? (
                <GoChevronDown className="mt-1" />
              ) : (
                <GoChevronRight className="mt-1" />
              )}
            </div>
            {isExpanded && <div>{item.content} </div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
