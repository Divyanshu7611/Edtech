import React from "react";
import ProgramCard from "./ProgramCard";
import { programPop } from "@/data/programPopup";

export default function ProgramCardSection({ data }) {
  return (
    <div className="flex gap-8 md:flex-row flex-col place-items-center items-center">
      {data.map((data) => (
        <ProgramCard
          key={data.students}
          heading={data.heading}
          points={data.points}
          image={data.image}
          index={data.index}
          students={data.students}
          data={programPop[data.data]}
        />
      ))}
    </div>
  );
}
