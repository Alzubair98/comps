import React, { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div key={index} className="border-x border-t rounded">
            <div
              className="flex justify-between gap-1 p-3 bg-gray-50 border-b items-center cursor-pointer"
              onClick={() => {
                expandedIndex === index
                  ? setExpandedIndex(-1)
                  : setExpandedIndex(index);
              }}
            >
              {item.label}{" "}
              <span className="text-2xl">
                {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
              </span>
            </div>
            {isExpanded && (
              <div className=" p-5 border-b ">{item.content} </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
