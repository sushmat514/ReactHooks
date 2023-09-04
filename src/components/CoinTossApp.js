import React,{useState} from 'react'
import './CoinTossApp.css'
function CoinTossApp() {
    const [totalTossCount, setTotalTossCount] = useState(0)
    const[headsCount, setHeadsCount] = useState(0)
    const [tailsCount,setTailsCount] = useState(0)
    const tossButtonHandler=()=>{
        const tossResult = Math.floor(Math.random()*2)
        if(tossResult === 0){
            setHeadsCount(prevValue=>prevValue+1)
            setTotalTossCount(prevValue=>prevValue+1)
        }
        else{
            setTailsCount(prevValue=>prevValue+1)
            setTotalTossCount(prevValue=>prevValue+1)
        }
    }
  return (
    <div className='main-background'>
      <div className="coin-toss-container">
        <h1>Coin Toss Game</h1>
        <p>Heads (or) tails</p>
        <img src="https://assets.ccbp.in/frontend/react-js/heads-img.png" alt="coin Toss"/><br/>
        <button onClick={tossButtonHandler}className='toss-coin-button'>Toss Coin</button>
        <div className='count-container'>
            <p className='descript'>Total: {totalTossCount}</p>
            <p className='descript'>Heads: {headsCount}</p>
            <p className='descript'>Tails: {tailsCount}</p>

        </div>
      </div>
    </div>
  )
}

export default CoinTossApp
