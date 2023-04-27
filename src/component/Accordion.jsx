import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div key={index}>
            <div
              onClick={() => {
                setExpandedIndex(index);
              }}
            >
              {item.label}{" "}
              {isExpanded ? <AiFillCaretDown /> : <AiFillCaretRight />}
            </div>
            {isExpanded && <div>{item.content} </div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
