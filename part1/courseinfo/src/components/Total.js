import React from "react";

export const Total = ({ parts }) => {
  const total = parts.reduce((t, p) => (t + p.exercises), 0);
  return <div>
    <p>Number of exercises {total}</p>
  </div>;
};
