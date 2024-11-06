import React from 'react'
import banner from '../../assets/banner-main.png'

export default function Banner({ addMoney }) {
      return (
            <div className='bg-bg_shadow bg-no-repeat bg-cover overflow-hidden rounded-lg w-11/12 md:w-10/12 mx-auto my-10 font-Inter h-[600px]' >
                  <div className='bg-gradient-to-br h-full flex items-center justify-center from-gray-800 via-gray-500 to-gray-600 p-6'>
                        <div className='text-center space-y-3'>
                              <img src={banner} alt="banner-img" className='mx-auto' />
                              <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl capitalize text-gray-300'>Assemble unlimited Cricket Heroes World team</h1>
                              <p className='text-lg lg:text-xl font-bold text-gray-400 capitalize'>beyond boundaries beyond limits</p>
                              <div className='bg-transparent inline-block border-2 rounded-xl p-1 border-red-400'>
                                    <button onClick={addMoney}
                                          className='py-2 px-4 text-slate-100 rounded-lg bg-gradient-to-tl from-pink-500 via-red-400 to-orange-400 font-bold active:scale-95 transition-transform'>Claim Free Credit</button>
                              </div>
                        </div>
                  </div>
            </div >
      )
}
