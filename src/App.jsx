import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Navber from './components/Navber/Navber'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import MainSection from './components/MainSection/MainSection'

export default function App() {

  // Players data load...
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('./players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, []);

  // Claim free coin...
  const [money, setMoney] = useState(0);
  const addMoney = () => {
    const increaseMoney = 1600000;
    const updateMoney = money + increaseMoney;
    setMoney(updateMoney)
    handleCoinRemove(updateMoney)
    toast.success("Credit added to your account")
  }



  // Choose players... 
  const [selectP, setSelectP] = useState([])
  const selectPlayer = (player) => {
    const validPlayer = selectP.find((p) => p.id === player.id);
    if (money == 0) {
      toast.error("Not enough money to buy this player, Claim free credit")
      return
    }
    else if (player.price > money) {
      toast.error("Don't have enough coin")
      return
    }
    else if (validPlayer) {
      toast.warn(`${player.name} already selected`)
      return
    }
    else if (selectP.length > 5) {
      toast.info("You selected maximum player")
      return
    }
    setSelectP([...selectP, player])
    toast.success(`Congrates !! ${player.name} is now selected in your squad`)
    handleCoinRemove(player)
  }

  // Remove player from selected players...
  const removePlayer = (player) => {
    const newP = selectP.filter((p) => p.id !== player.id)
    setSelectP(newP)
    toast.error(`${player.name} removed successfully`)
  }


  // When Choose a player decrease coin...
  const handleCoinRemove = (player,updateMoney) => {
    console.log(player.price)
    console.log(updateMoney)
  }


  return (
    <div className='font-Sora'>
      <Navber money={money} />
      <Banner addMoney={addMoney} />
      <MainSection players={players}
        selectPlayer={selectPlayer}
        selectP={selectP}
        removePlayer={removePlayer} />
      <Footer />
    </div>
  )
}
