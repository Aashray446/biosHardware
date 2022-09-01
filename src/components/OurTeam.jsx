import React from "react";
import MemberCard from "./MemberCard";
// import ProfileCard from "./ProfileCard";
import Sadasya from '../../sadasya.json'

export default function OurTeam() {

  const saareSadasya = Sadasya.map((sadasya) => {
    return (
      <MemberCard
        key={sadasya.id}
        name={sadasya.name}
        designation={sadasya.designation}
        image={sadasya.image}
        description={sadasya.description}
      />
    );
  })

  return (
    <div>
      <div>

      </div>
      <h1 className="text-white text-4xl font-extrabold mb-10 font-poppins justify-start">
        Our Team
      </h1>

      <div className="grid grid-cols-3">
        {/* <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard /> */}
        {saareSadasya}
      </div>
    </div>
  );
}
