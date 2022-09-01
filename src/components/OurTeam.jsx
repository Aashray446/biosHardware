import React from "react";
import MemberCard from "./MemberCard";
import HomepageAlumni from '../../json/HomepageAlumni.json'

export default function OurTeam() {

  return (
    <div>
      <div>
      </div>
      <h1 className="text-white text-4xl font-extrabold mb-10 font-poppins justify-start">
        Our Team
      </h1>

      <div className="grid grid-cols-4">
        {HomepageAlumni.map((member, index) => {
          return <MemberCard key={index} name={member.name} fields={member.fields} profilePic={member.image} />
        })}
      </div>
    </div>
  );
}
