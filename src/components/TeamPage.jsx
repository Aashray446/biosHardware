import React from "react";
import AllMembers from "../../json/AllMembers.json";
import AllAlumni from "../../json/AllAlumni.json";
import MemberCard from "./MemberCard";

export default function TeamPage() {
  return (
    <>
      <h1 className="text-white text-center text-[60px] font-poppins font-semibold">
        Our <span className="text-[#5CE1E6]">Team</span>
      </h1>
      <br /> <br />
      <h3 className="text-white font-semibold xs:text-[50px] text-[40px] mb-10  xs:leading-[76.8px] leading-[66.8px] font-poppins text-center">
        Current team
      </h3>
      <br /> <br />
      {/* current team mapping */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {AllMembers.map((member, index) => {
          return (
            <MemberCard
              key={index}
              name={member.name}
              fields={member.fields}
              profilePic={member.image}
              link={member.link}
            />
          );
        })}
      </div>
      <br />
      <h1 className="text-white text-center text-[50px] font-poppins font-semibold">
        Alumni
      </h1>
      <br /> <br />
      {/* alumni mapping */}
      <div className="grid grid-cols-2 m-[-1] sm:grid-cols-3 md:grid-cols-4">
        {AllAlumni.map((member, index) => {
          return (
            <MemberCard
              key={index}
              name={member.name}
              fields={member.fields}
              profilePic={member.image}
              link={member.link}
            />
          );
        })}
      </div>
    </>
  );
}
