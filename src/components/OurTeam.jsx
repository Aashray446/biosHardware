import React from "react";
import MemberCard from "./MemberCard";
import HomepageAlumni from "../../json/HomepageAlumni.json";
import { Link } from "react-router-dom";

export default function OurTeam() {
  return (
    <>
      <div id="team" className="my-[8rem]">
        <div className="flex flex-row">
          <div className="items-center text-left w-1/2 ml-3">
            <h1 className="text-white font-semibold xs:text-[48px] text-[40px] mb-10  xs:leading-[76.8px] leading-[66.8px] font-poppins justify-start">
              Our Team
            </h1>
          </div>
          <div className="text-right w-1/2 mt-7 mr-3">
            <Link to="/biosHardware/team">
              <span className="rounded-full bg-transparent border-2 px-[1rem] py-2 text-lg border-cyan-700 text-cyan-100 hover:text-sky-500 text-semibold">
                Show all
              </span>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2">
          {HomepageAlumni.map((member, index) => {
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
      </div>
    </>
  );
}
