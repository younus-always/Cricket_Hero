import remove from '../../assets/delete.png'

export default function AddPlayers({ selectP, removePlayer, addMorePlayer }) {
      return (
            <div>
                  <div className='flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center justify-between'>
                        <h2 className='font-bold font-Inter my-3 text-xl'>Selected Players ({selectP.length}/6)</h2>
                  </div>
                  {
                        selectP.map((single, i) => <div key={i} className='bg-gray-200 rounded-lg w-full flex items-center justify-between p-4 mb-3'>
                              <div className='flex items-center gap-5'>
                                    <img src={single.cover} alt={`${single.name}-image`} className='w-14 h-14 rounded-2xl object-cover object-top' />
                                    <div className='space-y-2'>
                                          <h3 className='font-bold text-lg'>{single.name}</h3>
                                          <span className='text-gray-600 font-semibold'>{single.role}</span>
                                    </div>
                              </div>
                              <div onClick={() => removePlayer(single)}>
                                    <img src={`${remove}`} alt="" className='w-6 h-6 cursor-pointer' />
                              </div>
                        </div>)
                  }
                  <div className='mt-4'>
                        <button onClick={() => addMorePlayer('available')} className='py-3 px-5 rounded-lg font-bold bg-green-600 text-slate-200 hover:bg-green-500 capitalize font-Inter active:scale-95 transition-transform'>Add more player</button>
                  </div>
            </div>
      )
}
