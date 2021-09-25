import React from "react";
import { Part } from "./Part";

export const Content = ({ parts }) => <div>
  {parts.map(p =>
    <Part key={p.id} part={p.name} exercises={p.exercises} />
  )}
</div>;
