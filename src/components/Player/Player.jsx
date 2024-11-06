import React from 'react'


export default function Player({ player, selectPlayer }) {
      const { name, cover, price, country, player_img, role, hand } = player;
      return (
            <div class="card border">
                  <figure class="p-5">
                        <img src={cover}
                              alt="Shoes"
                              class="rounded-xl w-full h-80 md:h-60 object-cover object-top " />
                  </figure>
                  <div class="p-5 pt-2">
                        <div className='flex items-center gap-3'>
                              <img src={player_img} alt="" className='w-10 h-10 rounded-full object-cover object-top' />
                              <h2 class="card-title font-Inter">{name}</h2>
                        </div>
                        <div className='flex items-center justify-between border-b py-4'>
                              <div className='flex items-center gap-4 font-semibold text-gray-600'>
                                    <i class="fa-solid fa-flag"></i>
                                    <span>{country}</span>
                              </div>
                              <div className='bg-gray-100 rounded-lg py-1 px-2 text-sm font-semibold text-gray-500'>{role}</div>
                        </div>
                        <div>
                              <h2 className='text-lg font-bold my-3'>Rating</h2>
                              <div className='flex items-center justify-between'>
                                    <p className='font-semibold'>Batting/Bowling</p>
                                    <p className='font-semibold text-gray-500'>{hand}</p>
                              </div>
                              <div className='flex items-center justify-between pt-3'>
                                    <div>
                                          <p className='font-semibold text-gray-600'>Price: ${price}</p>
                                    </div>
                                    <div>
                                          <button onClick={() => selectPlayer(player)} className='border border-gray-300 rounded-lg font-semibold py-1 px-3 text-sm bg-gray-200 hover:bg-gradient-to-tr hover:text-slate-100 hover:from-pink-400 hover:via-red-400 hover:to-orange-300 transition-all duration-150 ease-in-out active:scale-95'>Choose player</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}