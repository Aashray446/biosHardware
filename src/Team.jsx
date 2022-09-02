import React from 'react'
import Teampage from './components/Teampage'

function Team() {
  // document.body.scrollTop = document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0)
  return (
    <div className='h-100vh'>
      {/* <h3>This is Team Page</h3> */}
      <Teampage />
      {/* gradient start */}
      <div className="absolute z-[-0] w-[20%] h-[35%] top-[100vh] cyan__gradient" />
      <div className="absolute z-[0] w-[40%] h-[40%] top-24 left-[75vw] rounded-full white__gradient " />
      <div className="absolute z-[0] w-[30%] h-[40%] top-28 left-[75vw] rounded-full blue__gradient " />
      <div className="absolute z-[0] w-[40%] h-[40%] top-[185vh] left-[10vw] rounded-full white__gradient " />
      <div className="absolute z-[0] w-[30%] h-[40%] top-[190vh] left-[10vw] rounded-full blue__gradient " />
      <div className="absolute z-[0] w-[25%] h-[50%] right-20 top-[105vh] blue__gradient" />
      {/* gradient end */}
    </div>
  )
}

export default Team
