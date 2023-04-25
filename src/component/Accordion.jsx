import React from "react";

const Accordion = ({ items }) => {
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
