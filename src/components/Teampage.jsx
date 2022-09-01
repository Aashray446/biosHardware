import React from 'react'
import AllMembers from '../../json/AllMembers.json'
import AllAlumni from '../../json/AllAlumni.json'
import MemberCard from './MemberCard'

export default function Teampage() {

    return (
        <>
            <h1 className='text-white text-center text-[60px] font-poppins font-semibold'>Our <span className='text-[#5CE1E6]'>Team</span></h1>
            <br /> <br />
            <h3 className='text-white text-center text-[45px] font-bold'>Current team</h3>
            <br /> <br />

            {/* current team mapping */}
            <div className="grid grid-cols-4">
                {AllMembers.map((member, index) => {
                    return (
                        <MemberCard key={index} name={member.name} fields={member.fields} profilePic={member.image} />
                    )
                })}
            </div>

            <br />
            <h1 className='text-white text-center text-[60px] font-poppins font-semibold'>Alumni</h1>
            <br /> <br />

            {/* alumni mapping */}
            <div className="grid grid-cols-4">
                {AllAlumni.map((member, index) => {
                    return (
                        <MemberCard key={index} name={member.name} fields={member.fields} profilePic={member.image} />
                    )
                })}
            </div>
        </>
    )
}
