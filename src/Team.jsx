import React from 'react'
import Teampage from './components/Teampage'

function Team() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className='h-100vh'>
      {/* <h3>This is Team Page</h3> */}
      <Teampage />
      {/* gradient start */}
      <div className="absolute z-[-0] w-[20%] h-[35%] top-[100vh] cyan__gradient" />
      {/* <div className="absolute z-[0] w-[60%] h-[80%] rounded-full white__gradient bottom-40" /> */}
      <div className="absolute z-[0] w-[25%] h-[50%] right-20 top-[105vh] blue__gradient" />
      {/* gradient end */}
    </div>
  )
}

export default Team
