import React from 'react'
import logo from '../../assets/logo-footer.png'
// import shadow from '../../assets/bg-shadow.png';

export default function Footer() {
      return (
            <div className='bg-black pt-12 mt-64'>
                  <div className='w-11/12 md:w-10/12 mx-auto'>
                        <div className='border rounded-lg p-3 -mt-44'>
                              <div className='bg-shadow bg-slate-50 bg-cover bg-repeat-round rounded-lg'>
                                    <div className='flex items-center justify-center text-center flex-col font-Sora h-60 p-3 space-y-3'>
                                          <h2 className='font-bold text-2xl'>Subscribe to your Newsletter</h2>
                                          <p className='font-semibold text-gray-600'>Get the latest update and news in your inbox!</p>
                                          <div className='sm:flex gap-3 space-y-2 sm:space-y-0'>
                                                <input type="text" placeholder='Enter your email' className='py-2 px-4 rounded-lg border bg-transparent outline-none max-w-80' />
                                                <button className='py-2 px-4 rounded-lg font-bold bg-gradient-to-br from-pink-300 via-red-300 to-yellow-400 text-stone-800 active:scale-95'>Subscribe</button>
                                          </div>
                                    </div>
                              </div>
                        </div>


                        <div className='my-8 flex items-center justify-center'>
                              <img src={logo} alt="footer-logo" />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-slate-50 py-10'>
                              <div>
                                    <h3 className='font-bold text-lg mb-3'>About us</h3>
                                    <p className='font-Sora font-semibold text-gray-400 pr-8'>We are a passionate team dedicated to providing the best services our customers.</p>
                              </div>
                              <div>
                                    <h3 className='font-bold text-lg mb-3'>Quick Links</h3>
                                    <ul className='space-y-2 list-disc list-inside text-gray-400'>
                                          <li><a href='#'>Home</a></li>
                                          <li><a href="#">Players</a></li>
                                          <li><a href="#">Teams</a></li>
                                          <li><a href="#">Matches</a></li>
                                    </ul>
                              </div>
                              <div>
                                    <h3 className='font-bold text-lg mb-3'>Subscribe</h3>
                                    <p className='font-Inter text-gray-400 font-semibold'>Subscribe to our newsletter for latest update</p>
                                    <div className='rounded-xl bg-slate-100 max-w-80 flex items-center justify-between overflow-hidden h-10 mt-3'>
                                          <input type="email" placeholder='Enter your email' className='outline-none bg-transparent text-gray-600 px-4 w-full' />
                                          <button className='text-sm font-bold bg-gradient-to-tr from-pink-500 via-red-400 to-orange-400 h-full px-3 text-slate-200'>Subscribe</button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <p className='capitalize text-gray-500 text-sm font-semibold text-center border-t border-gray-700 py-6'>Copyright &copy; 2024 cricket hero world. all rights reserved</p>
            </div>
      )
}
