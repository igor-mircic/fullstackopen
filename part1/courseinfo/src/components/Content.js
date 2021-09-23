import React from "react";
import { Part } from "./Part";

export const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => (
        <Part part={p.name} exercises={p.exercises} />
      ))}
    </div>
  );
};
