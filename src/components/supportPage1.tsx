import React from 'react'
import Image from 'next/image'
import Prof from "../../public/Images/prof.png"

const SupportPage1 = () => {
  return (
    <section className='pt-8 md:p-10 relative h-screen '>
        <div className='ml-12 md:ml-0 md:absolute w-[200px] top-[40px] right-[30px]'>
        <div className='relative'>
  <div className=' relative '>
    <span className='text-primary text-[16px] font-semibold mr-[20px] relative border-b-4 border-primary z-10 '>
      Settings
    </span>
    <span className='text-[18px] relative'>Privacy Tools</span>
  </div>
  <div className='absolute inset-0 border-b-2 border-zinc-300 transform translate-x-[30px]'></div>
  <div className='absolute inset-0 border-b-2 border-zinc-300 transform -translate-x-[30px]'></div>
</div>
    </div>
        <div className='flex flex-col gap-[10px] md:py-0'>
            <div className='hidden md:flex md:flex-col'>
            <div className='hidden md:flex md:flex-row md:gap-3 md:items-center'>
         <div className='md:h-[150px] md:w-[150px] mb-5 ml-[2%]'>
          <Image
            src={Prof}
            alt=""
            width={400}
            height={300}
            className=""
          />
          </div>
          <div className='flex flex-col gap-[3px]'>
               <span className='text-primary text-[18px] font-semibold'>UI Dani</span>
               <span className='text-12px text-zinc-300 font-semibold'>@UIDani_trivisity</span>
          </div>
          </div>
          <div className='flex flex-row justify-between border-b border-zinc-300 pb-[10px]'>
            <span className='text-black font-semibold text-[16px]'>Daniel Nessien</span>
            <small>pen</small>
          </div>
          </div>

            <div className='flex flex-col mt-12 gap-6 md:gap-0 md:mt-0'>
          <h3 className='text-[16px] text-primary py-[5px] font-semibold'>Account Security</h3>
            
            <div className='flex flex-row justify-between pb-[7px]'>
            <span className='font-semibold text-[16px]'>Email</span>
            <span className='text-[15px]'>big.nssien@gmail.com</span>
          </div>
          
          <div className='flex flex-col gap-[5px] p-[10px] border border-zinc-300'>
            <span className='text-[16px]'>Password</span>
            <span className='text-[14px]'>set a strong password to dsecure your account</span>
          </div>
          <div className='flex flex-col border border-zinc-300 md:border-none p-[10px]'>
          <h3 className='text-primary py-[5px] text-[16px] font-semibold'>Activity Log</h3>
          <div className='flex flex-row justify-between md:border-b border-zinc-300 pb-[10px]'>
            <span className='text-[14px]'>View and manage your activity log</span>
            <button className='border border-primarylight text-primary w-[85px] h-[30px] rounded-md '>View</button>
          </div>
          </div>
          <div className='flex flex-col border border-zinc-300 md:border-none p-[10px]'>
          <h3 className='text-primary py-[5px] text-[16px] font-semibold'>Theme</h3>
          <div className='flex flex-row justify-between md:border-b border-zinc-300 pb-[10px]'>
            <span className='text-[14px]'>View and manage your activity log</span>
            <small>icon</small>
          </div>
          </div>
          </div>
          </div>
    </section>
  )
}

export default SupportPage1