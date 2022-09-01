import React from "react";
import MemberCard from "./MemberCard";
import HomepageAlumni from '../../json/HomepageAlumni.json'
import { Link } from 'react-router-dom';
import Teampage from "./Teampage";

export default function OurTeam() {

  return (
    <>
      <div className="mb-[5rem]">
        <div className="flex flex-row items-center text-left">
          <h1 className="text-white text-4xl font-extrabold mb-10 font-poppins justify-start">
            Our Team
          </h1>
          <Link to="/team">
            <a className="rounded-full bg-transparent border-2 ml-[55rem] px-[1rem] py-2 text-lg border-cyan-700 text-cyan-100 hover:text-sky-500 text-semibold" >
              Show all
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-4">
          {HomepageAlumni.map((member, index) => {
            return (
              <MemberCard key={index} name={member.name} fields={member.fields} profilePic={member.image} />
            )
          })}
        </div>
      </div>
      <Teampage />
    </>
  );
}
