import React from 'react'

export default function MemberCard(props) {
    return (
        <>
            <div className='ml-3 mr-3 grid grid-cols-1 z-[50] scale-90 lg:scale-100'>
                <a href={props.link}>
                <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-gradient-to-t from-[#006979] to-[#000B4B] hover:scale-105 duration-150">
                    <div className="w-full h-[125px] bg-white"></div>
                    <div className="flex justify-center -mt-[100px]">
                        <img src={props.profilePic} className="w-[200px] h-[200px] rounded-full border-solid border-white border-2 -mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-white font-poppins text-2xl font-semibold mt-5">{props.name}</h3>
                        <p className="text-white mt-2 font-poppins font-semibold">{props.fields}</p>
                    </div>
                    <div className="flex justify-center pb-3">
                    </div>
                </div>
                </a>
                
            </div>
        </>
    )
}
