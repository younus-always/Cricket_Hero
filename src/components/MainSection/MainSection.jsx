import React, { useState } from 'react'
import AddPlayers from '../AddPlayers/AddPlayers'
import Players from '../Players/Players'

export default function MainSection({ players, selectPlayer, selectP, removePlayer }) {

      const [isActive, setIsActive] = useState({
            value: true,
            status: 'available'
      })
      const handleActive = (status) => {
            if (status == 'available') {
                  setIsActive({
                        value: true,
                        status: 'available'
                  })
            } else {
                  setIsActive({
                        value: false,
                        status: 'selected'
                  })
            }
      }

      const addMorePlayer = (status) => {
            handleActive(status)
      }


      return (
            <div className='w-11/12 md:w-10/12 mx-auto py-10'>
                  <div className='flex items-center justify-end sticky top-28 z-40'>
                        <div className='flex items-center bg-slate-50 overflow-hidden rounded-lg border border-green-500 '>
                              <button onClick={() => handleActive('available')}
                                    className={`py-2 px-4 font-bold hover:bg-green-400 ${isActive.value ? `bg-green-500` : ``}`}

                              >Available</button>
                              <button onClick={() => handleActive('selected')}
                                    className={`py-2 px-4 flex items-center justify-center font-bold hover:bg-green-400 ${isActive.value ? `` : `bg-green-500`}`}
                              >Selected (<span>{selectP.length}</span>)</button>
                        </div>
                  </div>

                  {/* Available section here */}
                  {
                        isActive.value ?
                              <Players players={players} selectPlayer={selectPlayer}></Players>
                              : <AddPlayers selectP={selectP} removePlayer={removePlayer} addMorePlayer={addMorePlayer} ></AddPlayers>
                  }
            </div >
      )
}
