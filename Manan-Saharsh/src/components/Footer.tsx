import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='h-[100vh] bg-[url(/herobg.svg)] bg-cover flex justify-center items-center font-aladin tracking-wider'>
      <div className='max-w-[100%] flex flex-col justify-around items-center h-full'>
        <Link href="/">
          <div className="flex relative justify-center items-center p-1 w-24 h-24 bg-cover rounded-full border-2 border-white backdrop-blur-md">
            <Image
              src={"/logo.svg"}
              alt={""}
              width={50}
              height={50}
              className="transition-all duration-500 hover:scale-110"
            />
          </div>
        </Link>

        <p className='text-white text-4xl md:text-8xl'>
          Join the Community!
        </p>
        <p className='text-white text-2xl md:text-3xl md:w-[33.5856%] text-center'>
          Subscribe to The Education to receive monthly tips,offers & more.
        </p>

        <div className='relative w-[95vw] rounded-3xl  h-32 text-black bg-white  
    flex flex-col justify-center md:p-52 border-t-2 gap-5'>
          <div className='border-b-2  w-full flex justify-center  items-center h-16 p-10 '>

            <div className='h-14 rounded-full flex justify-around items-center w-[90% ] md:w-[90%] border-2 border-black scale-75 md:scale-100 gap-2 px-2 md:gap-10 md:px-10'>
              <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black hover:bg-[#124752] hover:text-white'>
                <p className='font-bold'>
                  Instagram
                </p>
              </Link>
              <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black hover:bg-[#124752] hover:text-white'>
                <p className='font-bold'>
                  Twitter
                </p>
              </Link>
              <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black hover:bg-[#124752] hover:text-white'>
                <p className='font-bold'>
                  LinkedIn
                </p>
              </Link>
              <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black hover:bg-[#124752] hover:text-white'>
                <p className='font-bold'>
                  Whatsapp
                </p>
              </Link>
              <Link href={''} className='flex justify-center items-center h-full w-24 border-2 rounded-full border-black hover:bg-[#124752] hover:text-white'>
                <p className='font-bold'>
                  Pintrest
                </p>
              </Link>
            </div>
          </div>
          <div className='w-full h-16 flex justify-center items-center scale-75 md:scale-100'>
            <p className='font-bold'>©2024, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
