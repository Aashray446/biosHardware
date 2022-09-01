import React from 'react'
import Mon from '../assets/mon.jpeg'

export default function MemberCard() {
    return (
        <>
            <div className='ml-3 mr-3 grid grid-cols-1'>
                <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-indigo-100">
                    {/* <img src={Mon} className="w-full h-[125px]" /> */}
                    <div className="w-full h-[125px] bg-[#006979]"></div>
                    <div className="flex justify-center -mt-[100px]">
                        <img src={Mon} className="rounded-full border-solid border-white border-2 -mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-sm bold font-sans">Mohan Swain</h3>
                        <p className="mt-2 font-sans font-light">Hello, i'm from another the other side!</p>
                    </div>
                    <div className="flex justify-center pb-3">
                        {/* <div className="text-center mr-3 border-r pr-3">
                            <h2>34</h2>
                            <span>Photos</span>
                        </div> */}
                        {/* <div className="text-center">
                            <h2>42</h2>
                            <span>Friends</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
