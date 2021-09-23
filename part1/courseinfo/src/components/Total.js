import React from "react";

export const Total = ({ parts }) => {
  const total = parts.reduce((p, c) => p + c.exercises, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};
