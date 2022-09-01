import React from "react";
import Card from "./ProfileCard";

export default function OurTeam() {
  return (
    <div>
      <div>

      </div>
      <h1 className="text-white text-4xl font-extrabold mb-20 font-poppins justify-start">
        Our Team
      </h1>

      <div className="grid  lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
