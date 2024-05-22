
import React from 'react'
import Link from 'next/link'

const Contact_link = ({ position, text }) => {
  return (
    <>
      <Link href={'/contact'}>  <div className={'bg-yellow cursor-pointer w-fit flex p-1 rounded-full items-center' + " " + position}>
        <h4 className='md_black_heading mx-4 mb-0'>
          {text}
        </h4>
        <div className='animate-bounce flex rounded-full bg-white py-3 px-3 m-1 h-auto'>
          <i className="lni lni-arrow-right"></i>
        </div>
      </div> </Link>
      
    </>
  )
}

export default Contact_link
