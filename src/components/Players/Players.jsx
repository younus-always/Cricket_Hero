import React from 'react'
import Player from '../Player/Player'

export default function Players({ players, selectPlayer }) {
      return (
            <div>
                  <div className='flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center justify-between'>
                        <h2 className='font-bold font-Inter my-3 text-xl'>Available Players</h2>
                  </div>
                  <div className='mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {players.map((player) => <Player key={player.id} player={player}
                              selectPlayer={selectPlayer} />)}
                  </div>
            </div>
      )
}
